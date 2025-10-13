"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAllProjects } from '@/src/api/offPlans';

interface Project {
  id: number;
  name: string;
  photos: string[];
  description: string;
  location: {
    city: string;
    community: string;
    sub_community?: string;
  };
  newParam: {
    price: number;
    bedroomMin: number;
    bedroomMax: number;
  };
  developer: {
    name: string;
  };
}

interface BackgroundImageSliderProps {
  className?: string;
  onProjectChange?: (project: Project | null) => void;
}

export const BackgroundImageSlider: React.FC<BackgroundImageSliderProps> = ({
  className = "",
  onProjectChange,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        console.log('🔄 Starting to fetch projects...');
        
        // Fetch projects with the specified API endpoint
        const queryParams = new URLSearchParams({
          sort_by: "total_count",
          sort_order: "desc",
          page: "1",
          size: "9",
          type: "off_plan"
        });

        console.log('📡 API URL:', process.env.NEXT_PUBLIC_API_URL);
        const response = await getAllProjects(queryParams.toString());
        console.log('✅ API Response received:', response);
        const projectsData = response?.projects || [];

        // Filter projects that have photos
        const projectsWithPhotos = projectsData.filter((project: Project) => 
          project.photos && project.photos.length > 0
        );

        console.log('📸 Projects with photos:', projectsWithPhotos.length);
        setProjects(projectsWithPhotos);
        
        // Notify parent component about the current project
        if (onProjectChange && projectsWithPhotos.length > 0) {
          onProjectChange(projectsWithPhotos[0]);
        }
      } catch (error) {
        console.error('❌ Error fetching projects:', error);
        console.log('🔄 Using fallback images...');
        // Fallback to static images if API fails
        const fallbackProjects: Project[] = [
          {
            id: 1,
            name: "Dubai Marina",
            photos: ["/images/dubai-marina.webp"],
            description: "Luxury waterfront living",
            location: { city: "Dubai", community: "Dubai Marina" },
            newParam: { price: 2000000, bedroomMin: 1, bedroomMax: 3 },
            developer: { name: "Emaar" }
          },
          {
            id: 2,
            name: "Palm Jumeirah",
            photos: ["/images/Palm-Jumeirah.webp"],
            description: "Exclusive island living",
            location: { city: "Dubai", community: "Palm Jumeirah" },
            newParam: { price: 5000000, bedroomMin: 2, bedroomMax: 4 },
            developer: { name: "Nakheel" }
          },
          {
            id: 3,
            name: "Dubai Hills Estate",
            photos: ["/images/Dubai-Hills-Estate.webp"],
            description: "Family-friendly community",
            location: { city: "Dubai", community: "Dubai Hills Estate" },
            newParam: { price: 3000000, bedroomMin: 2, bedroomMax: 5 },
            developer: { name: "Emaar" }
          }
        ];
        console.log('📸 Fallback projects set:', fallbackProjects);
        setProjects(fallbackProjects);
        
        if (onProjectChange && fallbackProjects.length > 0) {
          onProjectChange(fallbackProjects[0]);
        }
      } finally {
        setLoading(false);
        console.log('✅ Loading completed');
      }
    };

    fetchProjects();
  }, []); // Remove onProjectChange dependency to prevent infinite loop

  // Auto-slide functionality
  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % projects.length;
        return newIndex;
      });
    }, 8000); // Change project every 8 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  // Notify parent component when current project changes
  useEffect(() => {
    if (onProjectChange && projects.length > 0) {
      onProjectChange(projects[currentIndex]);
    }
  }, [currentIndex, projects, onProjectChange]);

  if (loading) {
    return (
      <div className={`absolute inset-0 w-full h-full bg-gray-900 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className={`absolute inset-0 w-full h-full bg-gray-900 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <p>No projects available</p>
        </div>
      </div>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={currentProject.photos[0]}
          alt={`${currentProject.name} - ${currentProject.location.community}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
          quality={90}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Project counter */}
      {projects.length > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-black/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentIndex + 1} / {projects.length}
        </div>
      )}
    </div>
  );
};
