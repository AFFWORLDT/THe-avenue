import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropertyData {
  id?: string | number;
  name?: string;
  location?: {
    city?: string;
    community?: string;
  };
  newParam?: {
    price?: number;
        totalUnits?: number;

  };
  photos?: string[];
  area_id?: string;

}

export default function PropertyCard({ data }: { data?: PropertyData }) {
    const router = useRouter();
  return (
    <Card className="overflow-hidden border-none p-0 shadow-sm border-2 rounded-lg" onClick={() => router.push(`/offPlans/details/${data?.id}`)}>
      <div className="relative w-full h-64 overflow-hidden group">
        <Image
          src={data?.photos?.[0] ?? "/placeholder.jpg"}
          alt={`Image of ${data?.name}`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {data?.newParam?.totalUnits ? (
          <div className="absolute bottom-3 left-3 bg-white text-xs font-light tracking-wider px-2 py-1 rounded-full shadow-md uppercase">
            {data.newParam.totalUnits} UNITS
          </div>
        ) : null}
        <div className="absolute bottom-3 right-3 bg-white text-xs font-light px-2 py-1 rounded-full shadow-md text-[#1A202C]">
          FROM {data?.newParam?.price?.toLocaleString() ?? "N/A"}
          <span className="font-light text-gray-500 ml-1">د.إ</span>
        </div>
      </div>
      <CardContent className="p-4">
        <CardDescription className="text-xs text-gray-500 mb-1 font-light">
          #{data?.area_id ?? "-"}
        </CardDescription>
        <CardTitle className="text-lg font-mono font-light text-[#1A202C] mb-1 tracking-tight">
          {data?.name ?? "Unnamed Property"}
        </CardTitle>
        <p className="text-xs uppercase tracking-tight text-primary font-light">
          {`${data?.location?.community ?? ""}${
            data?.location?.community && data?.location?.city ? ", " : ""
          }${data?.location?.city ?? ""}`}
        </p>
      </CardContent>
    </Card>
  );
}
