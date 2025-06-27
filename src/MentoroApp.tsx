import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Calendar } from "./components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { format } from 'date-fns';
import { Search, Calendar as CalendarIcon, MapPin, Star, BookOpen, User, LogIn } from 'lucide-react';

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

type Instructor = {
  id: number;
  name: string;
  rating: number;
  price: number;
  reviews: number;
  image: string;
  skill: string;
  location: string;
  available: boolean;
};

type Class = {
  id: number;
  title: string;
  instructor: string;
  type: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
};

export default function MentoroApp() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 2))
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Common skills for the scrollable bar
  const commonSkills = [
    'Tennis', 'Guitar', 'Yoga', 'Piano', 'Cooking', 
    'Chess', 'Hindi', 'Math', 'Photography', 'Swimming',
    'Drawing', 'Singing', 'Coding', 'Dancing', 'Meditation',
    'Cricket', 'Badminton', 'French', 'German', 'Painting'
  ];

  // Mock instructors data with Indian pricing (₹250-₹1500)
  const instructors: Instructor[] = [
    {
      id: 1,
      name: 'Aarav Sharma',
      rating: 4.8,
      price: 800,
      reviews: 24,
      image: '',
      skill: 'Tennis',
      location: 'Delhi Sports Club',
      available: true
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4.5,
      price: 500,
      reviews: 18,
      image: '',
      skill: 'Guitar',
      location: 'Mumbai Music Academy',
      available: true
    },
    {
      id: 3,
      name: 'Rahul Verma',
      rating: 4.9,
      price: 1200,
      reviews: 32,
      image: '',
      skill: 'Yoga',
      location: 'Bangalore Wellness Center',
      available: false
    },
    {
      id: 4,
      name: 'Ananya Singh',
      rating: 4.7,
      price: 600,
      reviews: 21,
      image: '',
      skill: 'Piano',
      location: 'Hyderabad Arts School',
      available: true
    }
  ];

  // Featured classes data with Indian pricing
  const featuredClasses: Class[] = [
    {
      id: 1,
      title: 'Advanced Tennis Techniques',
      instructor: 'Aarav Sharma',
      type: 'Sport • Tennis',
      price: '₹800/hr',
      rating: 4.8,
      reviews: 24,
      image: ''
    },
    {
      id: 2,
      title: 'Guitar for Beginners',
      instructor: 'Priya Patel',
      type: 'Music • Guitar',
      price: '₹500/hr',
      rating: 4.5,
      reviews: 18,
      image: ''
    },
    {
      id: 3,
      title: 'Morning Yoga Flow',
      instructor: 'Rahul Verma',
      type: 'Fitness • Yoga',
      price: '₹1200/hr',
      rating: 4.9,
      reviews: 32,
      image: ''
    },
    {
      id: 4,
      title: 'Piano Masterclass',
      instructor: 'Ananya Singh',
      type: 'Music • Piano',
      price: '₹600/hr',
      rating: 4.7,
      reviews: 21,
      image: ''
    }
  ];

  const handleSearch = () => {
    if (searchTerm) {
      setShowResults(true);
    }
  };

  const handleSkillClick = (skill: string) => {
    setSearchTerm(skill);
    setShowResults(true);
  };

  const goToHome = () => {
    setSearchTerm('');
    setShowResults(false);
    window.scrollTo(0, 0); // Scroll to top when going home
  };

  const formatDateRange = () => {
    if (dateRange.from && dateRange.to) {
      return `${format(dateRange.from, 'MMM d')} - ${format(dateRange.to, 'MMM d')}`;
    }
    return 'Select dates';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with logo and auth buttons */}
      <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={goToHome}
        >
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-blue-600">Mentoro</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Login
          </Button>
          <Button className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Sign Up
          </Button>
        </div>
      </header>

      <div className="p-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-md p-1 border border-gray-200 max-w-2xl mx-auto mb-12">
          {/* Search Input */}
          <div className="flex items-center px-4 py-2 flex-1">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="What skill do you want to learn?"
              className="border-0 focus-visible:ring-0 shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>

          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center px-4 py-2 border-l border-gray-200 rounded-none h-full"
              >
                <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm">
                  {formatDateRange()}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    setDateRange(range);
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          {/* Search Button */}
          <Button 
            onClick={handleSearch}
            className="rounded-full h-12 w-12 p-0 flex items-center justify-center ml-2"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Results Section */}
        {showResults ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Section - Left Side */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {instructors.filter(i => i.available).length} {searchTerm} instructors available
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center relative">
                {/* Instructor Markers */}
                {instructors.filter(i => i.available).map((instructor, idx) => (
                  <div 
                    key={instructor.id}
                    className="absolute"
                    style={{
                      top: `${30 + (idx * 20)}%`,
                      left: `${20 + (idx * 15)}%`
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                ))}
                <p className="text-gray-500">Interactive map would display here</p>
              </div>
            </div>

            {/* Instructors List - Right Side */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Available Instructors</h3>
              <div className="grid grid-cols-1 gap-6">
                {instructors.filter(i => i.available).map((instructor) => (
                  <Card key={instructor.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-gray-200 h-40 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-500">{instructor.name.charAt(0)}</span>
                      </div>
                      <div className="p-4">
                        <CardTitle className="text-lg">{instructor.name}</CardTitle>
                        <p className="text-sm text-gray-500">{instructor.skill} • {instructor.location}</p>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{instructor.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({instructor.reviews} reviews)</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <p className="font-bold">₹{instructor.price}/hr</p>
                          <Button size="sm">Book Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Find your perfect instructor</h2>
            <p className="text-gray-500 mb-6">Search for skills like tennis, guitar, yoga, or cooking</p>
            
            {/* Scrollable skills bar */}
            <div className="flex overflow-x-auto pb-4 gap-2 px-4">
              {commonSkills.map((skill) => (
                <Button 
                  key={skill}
                  variant="outline"
                  className="whitespace-nowrap rounded-full px-4 py-2"
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Featured Classes Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredClasses.map((cls) => (
              <Card key={cls.id} className="hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-40 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-500">{cls.title}</span>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">{cls.title}</CardTitle>
                  <p className="text-sm text-gray-500">{cls.type}</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{cls.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({cls.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold">{cls.price}</p>
                    <Button size="sm">View</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
