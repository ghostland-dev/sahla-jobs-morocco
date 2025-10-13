import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, SlidersHorizontal } from "lucide-react";

const FilterSection = () => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6 border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="البحث عن وظيفة..." 
            className="pr-10"
          />
        </div>

        <Select>
          <SelectTrigger className="gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <SelectValue placeholder="المدينة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="casablanca">الدار البيضاء</SelectItem>
            <SelectItem value="rabat">الرباط</SelectItem>
            <SelectItem value="marrakech">مراكش</SelectItem>
            <SelectItem value="fes">فاس</SelectItem>
            <SelectItem value="tangier">طنجة</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="gap-2">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <SelectValue placeholder="القطاع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tech">تكنولوجيا المعلومات</SelectItem>
            <SelectItem value="marketing">التسويق</SelectItem>
            <SelectItem value="finance">المالية</SelectItem>
            <SelectItem value="education">التعليم</SelectItem>
            <SelectItem value="health">الصحة</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-gradient-primary hover:shadow-elegant transition-all gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          بحث
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
