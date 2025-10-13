import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  job: {
    title: string;
    company: string;
  };
  onBack: () => void;
}

const ApplicationForm = ({ job, onBack }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentPosition: "",
    experience: "",
    coverLetter: "",
    portfolio: "",
    linkedin: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك قريباً",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto p-12 text-center border-border/50">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">تم إرسال طلبك بنجاح!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              شكراً لتقديمك على وظيفة <span className="font-semibold text-foreground">{job.title}</span> في {job.company}
            </p>
            <p className="text-muted-foreground mb-8">
              سيقوم فريق التوظيف بمراجعة طلبك وسنتواصل معك خلال ٥-٧ أيام عمل.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={onBack} variant="outline" size="lg">
                العودة إلى الوظيفة
              </Button>
              <Button onClick={() => window.location.href = "/"} size="lg" className="bg-gradient-primary">
                تصفح المزيد من الوظائف
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          العودة إلى تفاصيل الوظيفة
        </Button>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-border/50">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">التقديم على الوظيفة</h1>
              <p className="text-xl text-muted-foreground">
                {job.title} - {job.company}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">المعلومات الشخصية</h2>
                
                <div>
                  <Label htmlFor="fullName">الاسم الكامل *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+212 6XX XXX XXX"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">المعلومات المهنية</h2>
                
                <div>
                  <Label htmlFor="currentPosition">المنصب الحالي *</Label>
                  <Input
                    id="currentPosition"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleChange}
                    required
                    placeholder="مثال: مطور ويب"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">سنوات الخبرة *</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="مثال: ٣ سنوات"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="linkedin">رابط LinkedIn (اختياري)</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">رابط الأعمال (اختياري)</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://portfolio.com"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">رسالة التقديم</h2>
                
                <div>
                  <Label htmlFor="coverLetter">لماذا أنت مناسب لهذه الوظيفة؟ *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    placeholder="اشرح لماذا أنت المرشح المثالي لهذه الوظيفة..."
                    className="mt-1 min-h-[150px]"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">السيرة الذاتية</h2>
                
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">انقر لتحميل السيرة الذاتية</p>
                  <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (حد أقصى 5MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1"
                >
                  إلغاء
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-primary hover:shadow-elegant transition-all"
                >
                  إرسال الطلب
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
