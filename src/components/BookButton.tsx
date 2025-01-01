import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

interface BookButtonProps {
  propertyId: number;
  propertyName: string;
}

export function BookButton({ propertyId, propertyName }: BookButtonProps) {
  const handleBooking = () => {
    // TODO: Implement booking logic
    console.log(`Booking property ${propertyName} (ID: ${propertyId})`);
  };

  return (
    <Button 
      className="w-full mt-4" 
      onClick={handleBooking}
    >
      <CalendarDays className="mr-2 h-4 w-4" />
      Book Now
    </Button>
  );
}