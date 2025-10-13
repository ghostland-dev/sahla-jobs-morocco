import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, BookmarkPlus, Bell, Settings, MapPin, Mail, Phone, Calendar, ExternalLink } from "lucide-react";

const Profile = () => {
  const applications = [
    {
      id: 1,
      job: "مطور ويب Full Stack",
      company: "TechMorocco",
      status: "قيد المراجعة",
      appliedDate: "٢٠ يناير ٢٠٢٥",
      statusColor: "bg-primary/10 text-primary"
    },
    {
      id: 2,
      job: "مدير تسويق رقمي",
      company: "Digital Agency MA",
      status: "تم الرفض",
      appliedDate: "١٨ يناير ٢٠٢٥",
      statusColor: "bg-destructive/10 text-destructive"
    },
    {
      id: 3,
      job: "مصمم UI/UX",
      company: "Creative Studio",
      status: "مقابلة مجدولة",
      appliedDate: "١٥ يناير ٢٠٢٥",
      statusColor: "bg-accent/10 text-accent"
    }
  ];

  const savedJobs = [
    {
      id: 1,
      job: "محاسب قانوني",
      company: "Finance Group",
      location: "مراكش",
      salary: "١٠,٠٠٠ - ١٥,٠٠٠ درهم"
    },
    {
      id: 2,
      job: "مهندس بيانات",
      company: "Data Solutions",
      location: "الدار البيضاء",
      salary: "١٨,٠٠٠ - ٣٠,٠٠٠ درهم"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Card className="lg:col-span-1 p-6 border-border/50 h-fit">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-1">أحمد محمد</h2>
              <p className="text-sm text-muted-foreground">مطور ويب</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">الدار البيضاء، المغرب</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">ahmed@email.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">انضم في يناير ٢٠٢٥</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button className="w-full gap-2 bg-gradient-primary hover:shadow-elegant transition-all">
                <Settings className="w-4 h-4" />
                تعديل الملف الشخصي
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-bold mb-3 text-sm">ملف التقديم</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">اكتمال الملف</span>
                  <span className="font-semibold">٧٥٪</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary w-3/4"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="applications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="applications" className="gap-2">
                  <Briefcase className="w-4 h-4" />
                  طلباتي
                </TabsTrigger>
                <TabsTrigger value="saved" className="gap-2">
                  <BookmarkPlus className="w-4 h-4" />
                  الوظائف المحفوظة
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="w-4 h-4" />
                  الإشعارات
                </TabsTrigger>
              </TabsList>

              {/* Applications Tab */}
              <TabsContent value="applications" className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">طلبات التوظيف</h2>
                    <p className="text-muted-foreground">تتبع حالة طلباتك</p>
                  </div>
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {applications.length} طلبات
                  </Badge>
                </div>

                {applications.map((app) => (
                  <Card key={app.id} className="p-6 border-border/50 hover:shadow-elegant transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1">{app.job}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{app.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge className={app.statusColor}>
                              {app.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              تم التقديم في {app.appliedDate}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="gap-2">
                        عرض التفاصيل
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Saved Jobs Tab */}
              <TabsContent value="saved" className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">الوظائف المحفوظة</h2>
                    <p className="text-muted-foreground">الوظائف التي قمت بحفظها</p>
                  </div>
                  <Badge variant="outline" className="text-base px-4 py-2">
                    {savedJobs.length} وظائف
                  </Badge>
                </div>

                {savedJobs.map((job) => (
                  <Card key={job.id} className="p-6 border-border/50 hover:shadow-elegant transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1">{job.job}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <Badge variant="outline" className="border-accent text-accent">
                              {job.salary}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="bg-gradient-primary">
                          قدم الآن
                        </Button>
                        <Button variant="outline" size="sm">
                          إزالة
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">الإشعارات</h2>
                    <p className="text-muted-foreground">تحديثات حول طلباتك</p>
                  </div>
                  <Button variant="outline" size="sm">
                    تحديد الكل كمقروء
                  </Button>
                </div>

                <Card className="p-6 border-border/50">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">تحديث حالة الطلب</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        تم تحديث حالة طلبك لوظيفة "مصمم UI/UX" في Creative Studio
                      </p>
                      <span className="text-xs text-muted-foreground">منذ ساعتين</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 opacity-60">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-border mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">وظيفة جديدة مناسبة لك</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        تم نشر وظيفة "مطور React" في الدار البيضاء
                      </p>
                      <span className="text-xs text-muted-foreground">منذ يوم واحد</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
