import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, BedDouble, Home, Users } from "lucide-react";
import { BookButton } from "./BookButton";

interface PropertyCardProps {
  id: number;
  name: string;
  description: string;
  bathrooms: number;
  standardPax: number;
  maximumPax: number;
  floorArea: number;
}

export function PropertyCard({
  id,
  name,
  description,
  bathrooms,
  standardPax,
  maximumPax,
  floorArea,
}: PropertyCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm">
              {standardPax}-{maximumPax} Guests
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            <span className="text-sm">Multiple Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="text-sm">{floorArea} m²</span>
          </div>
        </div>
        <BookButton propertyId={id} propertyName={name} />
      </CardContent>
    </Card>
  );
}