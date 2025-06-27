import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { format } from 'date-fns';
import { Star, MapPin, Clock, User, ArrowRight } from 'lucide-react';

type ClassType = {
  id: number;
  title: string;
  instructor: string;
  type: 'In-person' | 'Online';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  skill: string;
  description: string;
  instructorBio: string;
  experience: string;
  pricingOptions: {
    type: string;
    price: number;
    duration: string;
  }[];
  availability: {
    days: string[];
    timeSlots: string[];
  };
};

type Review = {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
};

export default function ClassDetailPage() {
  const [selectedClass, setSelectedClass] = useState<ClassType>({
    id: 1,
    title: 'Advanced Tennis Techniques',
    instructor: 'Aarav Sharma',
    type: 'In-person',
    price: 800,
    rating: 4.8,
    reviews: 24,
    image: '',
    skill: 'Tennis',
    description: 'Master advanced tennis techniques including topspin, slice, and serve variations. This course is designed for intermediate players looking to take their game to the next level with professional coaching.',
    instructorBio: 'Professional tennis coach with 10 years of experience training national level players. Former state champion with a passion for teaching proper technique and strategy.',
    experience: '10+ years coaching experience\nState Tennis Champion 2015-2017\nCertified by All India Tennis Association',
    pricingOptions: [
      { type: '1-on-1 Session', price: 800, duration: '1 hour' },
      { type: 'Group Session (3-5 people)', price: 500, duration: '1.5 hours' },
      { type: 'Package (5 sessions)', price: 3500, duration: '1 hour each' }
    ],
    availability: {
      days: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      timeSlots: ['09:00', '11:00', '15:00', '17:00']
    }
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedPricing, setSelectedPricing] = useState<number>(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Rahul Mehta',
      rating: 5,
      date: '2023-05-15',
      comment: 'Aarav completely transformed my backhand technique. Highly recommended!'
    },
    {
      id: 2,
      name: 'Priya Nair',
      rating: 4,
      date: '2023-04-22',
      comment: 'Great instructor, very patient with beginners. The facilities could be better though.'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      rating: 5,
      date: '2023-03-10',
      comment: 'Best tennis coach in Delhi! My game has improved dramatically in just 5 sessions.'
    }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${selectedClass.title} on ${format(selectedDate, 'PPP')} at ${selectedTime}`);
    } else {
      alert('Please select both date and time');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Class Header Section */}
      <div className="mb-8">
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500">Class Image</span>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{selectedClass.title}</h1>
            <div className="flex items-center mb-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{selectedClass.rating}</span>
              <span className="text-gray-500 ml-1">({selectedClass.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {selectedClass.instructor}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {selectedClass.type} • {selectedClass.skill}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">₹{selectedClass.price}/hr</p>
          </div>
        </div>
      </div>

      {/* Class Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Class Description</h2>
        <p className="text-gray-700">{selectedClass.description}</p>
      </div>

      {/* About the Instructor */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About the Instructor</h2>
        <p className="text-gray-700 mb-4">{selectedClass.instructorBio}</p>
        <h3 className="font-medium mb-2">Experience</h3>
        <div className="whitespace-pre-line text-gray-700">{selectedClass.experience}</div>
      </div>

      {/* Pricing Options */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Pricing Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedClass.pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer ${selectedPricing === index ? 'border-blue-500 border-2' : ''}`}
              onClick={() => setSelectedPricing(index)}
            >
              <CardContent className="p-4">
                <h3 className="font-bold">{option.type}</h3>
                <p className="text-gray-700">{option.duration}</p>
                <p className="text-xl font-bold mt-2">₹{option.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Book Your Session</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Picker */}
          <div>
            <h3 className="font-medium mb-2">Select Date</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full">
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => 
                    !selectedClass.availability.days.includes(
                      format(date, 'EEEE') // Get day name (Monday, Tuesday, etc.)
                    )
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Time Picker */}
          <div>
            <h3 className="font-medium mb-2">Select Time</h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedClass.availability.timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? 'default' : 'outline'}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Button 
          className="mt-6 w-full" 
          size="lg"
          onClick={handleBooking}
        >
          Book Now
        </Button>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{review.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                <p className="text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
