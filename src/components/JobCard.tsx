import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Clock, Bookmark } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  postedTime: string;
  tags: string[];
  logo?: string;
}

const JobCard = ({ title, company, location, type, salary, postedTime, tags }: JobCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer group border-border/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{postedTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {type}
              </Badge>
              {salary && (
                <Badge variant="outline" className="border-accent text-accent">
                  {salary}
                </Badge>
              )}
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50 flex gap-2">
        <Button className="flex-1 bg-gradient-primary hover:shadow-elegant transition-all">
          قدم الآن
        </Button>
        <Button variant="outline" className="flex-1">
          التفاصيل
        </Button>
      </div>
    </Card>
  );
};

export default JobCard;
