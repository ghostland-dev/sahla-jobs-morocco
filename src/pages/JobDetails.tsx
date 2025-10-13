import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, Clock, Briefcase, DollarSign, Users, BookmarkPlus, Share2, CheckCircle2 } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";

const JobDetails = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const job = {
    title: "مطور ويب Full Stack",
    company: "TechMorocco",
    location: "الدار البيضاء، المغرب",
    type: "دوام كامل",
    salary: "١٥,٠٠٠ - ٢٥,٠٠٠ درهم",
    experience: "٣-٥ سنوات",
    employees: "٥٠-٢٠٠ موظف",
    postedTime: "منذ ساعتين",
    deadline: "٣٠ يناير ٢٠٢٥",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    description: `
      نحن نبحث عن مطور Full Stack موهوب للانضمام إلى فريقنا المتنامي. ستكون مسؤولاً عن تطوير وصيانة تطبيقات الويب الخاصة بنا باستخدام أحدث التقنيات.
    `,
    responsibilities: [
      "تطوير وصيانة تطبيقات الويب باستخدام React و Node.js",
      "العمل مع فريق من المطورين والمصممين لإنشاء تجربة مستخدم استثنائية",
      "كتابة كود نظيف وقابل للصيانة",
      "المشاركة في مراجعات الكود واجتماعات الفريق",
      "حل المشاكل التقنية وتحسين الأداء"
    ],
    requirements: [
      "خبرة لا تقل عن ٣ سنوات في تطوير Full Stack",
      "إتقان React و Node.js",
      "معرفة قوية بقواعد البيانات (MongoDB, PostgreSQL)",
      "خبرة في العمل مع Git",
      "مهارات تواصل ممتازة باللغتين العربية والإنجليزية"
    ],
    benefits: [
      "راتب تنافسي",
      "تأمين صحي شامل",
      "إمكانية العمل عن بعد",
      "فرص التطوير المهني",
      "بيئة عمل حديثة ومريحة"
    ]
  };

  if (showApplicationForm) {
    return <ApplicationForm job={job} onBack={() => setShowApplicationForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="p-8 border-border/50">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                    <p className="text-xl text-muted-foreground mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{job.postedTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <BookmarkPlus className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  {job.type}
                </Badge>
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-muted-foreground text-xs">الراتب</p>
                    <p className="font-semibold">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs">الخبرة</p>
                    <p className="font-semibold">{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-muted-foreground text-xs">حجم الشركة</p>
                    <p className="font-semibold">{job.employees}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gradient-primary hover:shadow-elegant transition-all text-lg py-6"
                  onClick={() => setShowApplicationForm(true)}
                >
                  قدم الآن
                </Button>
                <Button variant="outline" className="px-8 text-lg py-6">
                  اتصل بالشركة
                </Button>
              </div>
            </Card>

            {/* Job Description */}
            <Card className="p-8 border-border/50">
              <h2 className="text-2xl font-bold mb-4">وصف الوظيفة</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {job.description}
              </p>

              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                المسؤوليات
              </h3>
              <ul className="space-y-3 mb-6">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                المتطلبات
              </h3>
              <ul className="space-y-3 mb-6">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                المزايا
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 border-border/50 sticky top-24">
              <h3 className="text-xl font-bold mb-4">معلومات إضافية</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">آخر موعد للتقديم</p>
                  <p className="font-semibold text-destructive">{job.deadline}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">نوع الوظيفة</p>
                  <p className="font-semibold">{job.type}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">الموقع</p>
                  <p className="font-semibold">{job.location}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">نُشر</p>
                  <p className="font-semibold">{job.postedTime}</p>
                </div>
              </div>

              <Button 
                className="w-full mt-6 bg-gradient-primary hover:shadow-elegant transition-all"
                onClick={() => setShowApplicationForm(true)}
              >
                قدم الآن
              </Button>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-3">تحتاج مساعدة؟</h3>
              <p className="text-white/90 text-sm mb-4">
                تواصل معنا للحصول على المساعدة في عملية التقديم
              </p>
              <Button variant="secondary" className="w-full">
                اتصل بنا
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
