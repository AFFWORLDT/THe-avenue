"use client";

import CallBackForm from "@/src/components/common/CallBackForm";
import Image from "next/image";

export default function CallBackPage() {
    return (
        <main className="min-h-screen relative bg-[#F9F7F2] overflow-hidden flex items-center justify-center py-20 px-4">
            {/* Luxury Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F2] via-white to-[#F0EBE0] opacity-90"></div>
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#dbbb90]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#dbbb90]/10 rounded-full blur-[120px]"></div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbbb90' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 w-full max-w-3xl pt-10">
                {/* Header Section */}
                <div className="text-center mb-12 space-y-6">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <Image
                            src="/images/avenue_logo.png"
                            alt="The Avenue Real Estate"
                            fill
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif text-[#C2A17B] uppercase tracking-[0.15em] leading-tight">
                        Call Back Form
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto"></div>
                    <p className="text-gray-600 font-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                        Fill the form below and our dedicated team will contact you to discuss your exclusive investment opportunities.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/80 backdrop-blur-xl border border-[#dbbb90]/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/0 via-[#dbbb90]/10 to-[#dbbb90]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <CallBackForm />
                </div>

                {/* Footer Note */}
                <p className="text-center text-gray-400 text-sm mt-8 font-light tracking-wide">
                    Your information is secure and will only be used to contact you regarding your inquiry.
                </p>
            </div>
        </main>
    );
}
