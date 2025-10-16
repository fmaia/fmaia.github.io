import { Mail, ExternalLink, BookOpen, Users, GraduationCap, Award, Linkedin, Building2, University } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import franciscoPhoto from "@/assets/francisco-photo.jpg";
const Index = () => {
  const publications = [{
    title: "D'Artagnan: A Trusted NoSQL Database on Untrusted Clouds",
    authors: "Pontes, R; Maia, F; Vilaca, R; Machado, N.",
    venue: "SRDS 2019",
    doi: "10.1109/srds47363.2019.00017"
  }, {
    title: "DATAFLASKS: epidemic store for massive scale systems",
    authors: "Maia, F; Matos, M; Vilaca, R; Pereira, J; Oliveira, R; Riviere, E.",
    venue: "SRDS 2014",
    doi: "10.1109/srds.2014.34"
  }, {
    title: "SafeFS: a modular architecture for secure user-space file systems",
    authors: "Pontes, R; Burihabwa, D; Maia, F; Paulo, J; Schiavoni, V; Felber, P; Mercier, H; Oliveira, R.",
    venue: "SYSTOR 2017",
    doi: "10.1145/3078468.3078480",
    award: "Best Student Paper Award"
  }, {
    title: "Minha: Large-Scale Distributed Systems Testing Made Practical",
    authors: "Machado, N; Maia, F; Neves, F; Coelho, F; Pereira, J.",
    venue: "OPODIS 2019",
    doi: "10.4230/lipics.opodis.2019.11"
  }, {
    title: "Worldwide Consensus",
    authors: "Maia, F; Matos, M; Pereira, J; Oliveira, R.",
    venue: "DAIS 2011",
    doi: "10.1007/978-3-642-21387-8_21",
    award: "Best Paper Award"
  }];
  const students = [{
    name: "Tomás Figueiredo Marques Palma",
    year: "Ongoing",
    thesis: "Efficient data replication for large-scale systems",
    status: "Ongoing",
    cosupervisors: "",
    institution: "Universidade do Porto"
  }, {
    name: "Diogo Filipe Pereira Santos",
    year: "Ongoing",
    thesis: "PADME: Probabilistic Data Management for Efficient ML/AI",
    status: "Ongoing",
    cosupervisors: "Carlos Baquero",
    institution: "Universidade do Porto"
  }, {
    name: "Alexandre Henrique Silva dos Santos",
    year: "Ongoing",
    thesis: "Modular Blockchain Data Storage and Management System",
    status: "Ongoing",
    cosupervisors: "",
    institution: "Universidade do Porto"
  }, {
    name: "Tomás Paiva Ramos",
    year: "Ongoing",
    thesis: "Security and Privacy Assurance for Model‑Context‑Protocol Servers and Agentic AI Workloads",
    status: "Ongoing",
    cosupervisors: "Rolando Martins",
    institution: "Universidade do Porto"
  }, {
    name: "Alexandre Ferreira",
    year: "2023",
    thesis: "Fault-tolerant and Large-scale Storage for POSIX-compliant Applications",
    status: "Alumni",
    cosupervisors: "João Paulo",
    institution: "Universidade do Minho"
  }, {
    name: "João Lopes",
    year: "2021",
    thesis: "Implementation of practical and secure methods for storage of cryptographic keys in applications",
    status: "Alumni",
    cosupervisors: "Ana Alonso",
    institution: "Universidade do Minho"
  }, {
    name: "Daniel Fernandes",
    year: "2021",
    thesis: "LSFS: Sistema de ficheiros tolerante a faltas para armazenamento em larga escala",
    status: "Alumni",
    cosupervisors: "Rui Oliveira, João Paulo",
    institution: "Universidade do Minho"
  }, {
    name: "Diogo Couto",
    year: "2018",
    thesis: "Aplicacações Web com requisitos de armazenamento e processamento privados",
    status: "Alumni",
    cosupervisors: "José Pereira",
    institution: "Universidade do Minho"
  }, {
    name: "Hugo Gonçalves",
    year: "2018",
    thesis: "SafePolyglot: Sistema Poliglota de Gestão Privada de Dados",
    status: "Alumni",
    cosupervisors: "José Pereira",
    institution: "Universidade do Minho"
  }, {
    name: "José Enes",
    year: "2017",
    thesis: "Coerência probabilística em sistemas chave-valor escaláveis",
    status: "Alumni",
    cosupervisors: "Miguel Matos, Rui Oliveira",
    institution: "Universidade do Minho"
  }, {
    name: "João Rodrigues",
    year: "2017",
    thesis: "Automatic Adaptation to Heterogeneity in Large Scale Distributed Storage Systems",
    status: "Alumni",
    cosupervisors: "José Pereira",
    institution: "Universidade do Minho"
  }];
  const projects = [{
    title: "BCD.S+M: Modular Blockchain Data Storage and Management System with AI",
    period: "2024-Present",
    role: "Lead",
    type: "PT2030",
    website: "https://invisiblelab-dev.github.io/invisible-storage-project-website/",
    description: "The BCD.S+M project aims to address this gap by exploring new approaches to manage large volumes of data efficiently and securely, adapting dynamically to the data’s own characteristics and requirements. It seeks to rethink data storage management by targeting the core bottlenecks currently limiting system performance and scalability in data-centric applications."
  },{
    title: "STAYAWAY COVID",
    period: "2020-2021",
    role: "Technical Lead",
    description: "COVID-19 contact tracing application for Portugal",
    website: "https://www.sns.gov.pt/apps/stayaway-covid/"
  }, {
    title: "SafeCloud",
    period: "2016-2019",
    role: "Lead Researcher",
    type: "H2020",
    description: "H2020 project on secure and resilient cloud architecture",
    website: "https://safecloud-project.unine.ch"
  }, {
    title: "CloudDBAppliance",
    period: "2019",
    role: "Researcher",
    type: "H2020",
    description: "Database appliance for cloud environments",
    website: "https://dbr-haslab.github.io/projects/cloudb"
  }, {
    title: "Stratus",
    description: "A Layered Approach to Data Management in the Cloud.",
    type: "FCT",
    reference: "FCOMP-01-0124-FEDER-015020",
    period: "2010-2013",
    website: "https://stratus.lsd.di.uminho.pt/",
    role: "Researcher"
  }, {
    title: "DC2MS",
    description: "Dependable Cloud Computing Management System",
    type: "HP Labs Innovation Research Award",
    website: "https://gsd.di.uminho.pt/projects/projects/DC2MS/base_view.html",
    period: "2008-2010",
    role: "Researcher"
  }];
  const teachingActivities = [{
    name: "Computer Lab",
    ects: 6,
    level: "2nd year, BSc in Computer Science",
    instances: [{
      year: "2025/2026",
      institution: "FEUP",
      role: "Course Coordinator"
    }, {
      year: "2024/2025",
      institution: "FEUP",
      role: "Course Coordinator"
    }]
  }, {
    name: "Operating Systems",
    ects: 6,
    level: "2nd year, BSc in Computer Science",
    instances: [{
      year: "2025/2026",
      institution: "FEUP",
      role: "Course Coordinator"
    }, {
      year: "2024/2025",
      institution: "FEUP",
      role: "Course Coordinator"
    }]
  }, {
    name: "Operating Systems",
    ects: 5,
    level: "2nd year, BSc in Computer Science",
    instances: [{
      year: "2022/2023",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2021/2022",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2020/2021",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Large-Scale Distributed Systems",
    ects: 6,
    level: "1st year, MSc in Computer Science",
    instances: [{
      year: "2025/2026",
      institution: "FEUP",
      role: "Teaching"
    }]
  }, {
    name: "Distributed Systems",
    ects: 5,
    level: "3rd year, BSc in Computer Science",
    instances: [{
      year: "2024/2025",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2012/2013",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Cloud Computing Applications and Services",
    ects: 5,
    level: "1st year MSc / 4th year Integrated MSc",
    instances: [{
      year: "2024/2025",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2023/2024",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2022/2023",
      institution: "U. Minho",
      role: "Lab Classes"
    }, {
      year: "2021/2022",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Algorithms and Data Structures",
    ects: 6,
    level: "1st year, BSc in Applied Data Science",
    instances: [{
      year: "2023/2024",
      institution: "U. Católica",
      role: "Course Coordinator"
    }]
  }, {
    name: "Object-Oriented Programming",
    ects: 5,
    level: "2nd year, BSc in Computer Science",
    instances: [{
      year: "2023/2024",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Networks and Communication Protocols",
    ects: 6,
    level: "1st year, MSc in Electronics and Computer Engineering",
    instances: [{
      year: "2022/2023",
      institution: "U. Lusíada",
      role: "Course Coordinator"
    }, {
      year: "2021/2022",
      institution: "U. Lusíada",
      role: "Course Coordinator"
    }]
  }, {
    name: "Algorithms and Programming",
    ects: 6,
    level: "1st year, Multiple BSc programs",
    instances: [{
      year: "2022/2023",
      institution: "U. Lusíada",
      role: "Course Coordinator"
    }]
  }, {
    name: "Programming Structures and Algorithm Analysis",
    ects: 6,
    level: "3rd year, BSc in Electronics and Computer Engineering",
    instances: [{
      year: "2021/2022",
      institution: "U. Lusíada",
      role: "Course Coordinator"
    }]
  }, {
    name: "System Deployment and Benchmarking",
    ects: 5,
    level: "1st year MSc / 4th year Integrated MSc",
    instances: [{
      year: "2017/2018",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Distributed Systems Paradigms",
    ects: 5,
    level: "3rd year, Integrated MSc",
    instances: [{
      year: "2016/2017",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Informatics Lab I",
    ects: 5,
    level: "1st year, Integrated MSc",
    instances: [{
      year: "2016/2017",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Informatics Lab III",
    ects: 5,
    level: "2nd year, Integrated MSc",
    instances: [{
      year: "2016/2017",
      institution: "U. Minho",
      role: "Lab Classes"
    }]
  }, {
    name: "Algorithms and Programming",
    ects: 0,
    level: "Qualifica-IT Program",
    instances: [{
      year: "2015/2016",
      institution: "U. Minho",
      role: "Co-organizer & Teaching"
    }]
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section - Minimalist */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
            <div className="shrink-0">
              <img src={franciscoPhoto} alt="Francisco Almeida Maia" className="h-32 w-32 rounded-full object-cover shadow-lg ring-2 ring-border" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Francisco Almeida Maia
              </h1>
              <p className="mb-1 text-lg font-medium text-primary">
                Assistant Professor
              </p>
              <p className="mb-3 text-muted-foreground">
                Department of Informatics Engineering, Faculty of Engineering, University of Porto
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {/*<Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href="mailto:franciscomaia@fe.up.pt">
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                </Button>*/}
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href="https://sigarra.up.pt/feup/pt/func_geral.formview?p_codigo=722898" target="_blank" rel="noopener noreferrer">
                    <University className="h-3.5 w-3.5" />
                    FEUP
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href="https://www.inesctec.pt/en/people/francisco-almeida-maia" target="_blank" rel="noopener noreferrer">
                    <Building2 className="h-3.5 w-3.5" />
                    INESC TEC
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href="https://dblp.org/pid/95/8626.html" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-3.5 w-3.5" />
                    DBLP
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <a href="https://www.linkedin.com/in/falmeidamaia/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">About</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm prose-slate max-w-none">
            <p className="text-foreground/80 leading-relaxed text-sm">
               Francisco Maia is an Assistant Professor at the University of Porto and holds a Ph.D. in Computer Science from 
               the MAP-i program, a joint doctoral initiative of the Universities of Minho, Aveiro, and Porto. 
               His research focuses on large-scale data storage and management, including distributed protocols, 
               fault-tolerant systems, and data security in shared cloud environments. 
               He is a senior researcher at INESC TEC and is a founder of InvisibleLab, where he has worked on technology transfer 
               and R&D activities between 2022 and 2024.

                Beyond academia, he has contributed to impactful projects such as the STAYAWAY COVID mobile applications 
                and has co-authored one of the first computer-implemented invention (software patent) granted to INESC TEC in the United States. 
                He also dedicates part of his time to social initiatives as vice-president of the board of AMU, an NGO recognized 
                for its work supporting vulnerable families in Portugal.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-xs">Distributed Systems</Badge>
              <Badge variant="secondary" className="text-xs">Cloud Computing</Badge>
              <Badge variant="secondary" className="text-xs">Data Management</Badge>
              <Badge variant="secondary" className="text-xs">System Security</Badge>
              <Badge variant="secondary" className="text-xs">Large-Scale Systems</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Research & Publications */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="mb-1 text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Selected Publications
            </h2>
            <p className="text-sm text-muted-foreground">
              Key contributions in distributed systems and cloud computing
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {publications.map((pub, index) => <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm font-semibold leading-tight">
                      {pub.title}
                    </CardTitle>
                    {pub.award && <Badge variant="default" className="shrink-0 gap-1 text-xs py-0">
                        <Award className="h-3 w-3" />
                      </Badge>}
                  </div>
                  <CardDescription className="text-xs line-clamp-1">
                    {pub.authors}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">
                      {pub.venue}
                    </span>
                    <Button variant="link" size="sm" asChild className="gap-1 h-auto p-0 text-xs">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        DOI
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" size="sm" asChild>
              <a href="https://dblp.org/pid/95/8626.html" target="_blank" rel="noopener noreferrer" className="gap-2">
                View All Publications
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-bold">Research Projects</h2>
          <p className="text-sm text-muted-foreground">
            Key research and development initiatives
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {projects.map((project, index) => <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription className="text-xs">{project.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                <div>
                  <Badge variant="outline" className="text-xs">{project.role}</Badge>
                  <Badge variant="outline" className="text-xs">{project.type}</Badge>
                </div>
                <Button variant="link" size="sm" asChild className="gap-1 h-auto p-0 text-xs">
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        more
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* Teaching */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="mb-1 text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Teaching Activities
            </h2>
            <p className="text-sm text-muted-foreground">Courses taught and coordinated in different Universities</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {teachingActivities.map((course, courseIndex) => <Card key={courseIndex} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-4 pb-3 px-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">{course.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{course.level}</p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">
                      ({course.instances.map(i => i.year.split('/').map(y => y.slice(-2)).join('/')).join(', ')})
                    </span>
                    <span>•</span>
                    <span>{course.instances[0].institution}</span>
                    {course.ects > 0 && <><span>•</span><span>{course.ects} ECTS</span></>}
                    <span>•</span>
                    <Badge variant="outline" className="text-xs h-auto py-0 px-1.5">{course.instances[0].role}</Badge>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Supervised Students */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Advising
          </h2>
          <p className="text-sm text-muted-foreground">Current students and Alumni</p>
        </div>
        <div className="grid gap-2 md:grid-cols-3">
          {students.map((student, index) => <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-3 px-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold">{student.name}</h3>
                  <div className="flex gap-1 shrink-0">
                    <Badge variant="outline" className="text-xs">MsC</Badge>
                    <Badge variant={student.status === "Ongoing" ? "default" : "secondary"} className="text-xs">
                      {student.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic line-clamp-2 mb-1">
                  "{student.thesis}"
                </p>
                {student.cosupervisors && <p className="text-xs text-muted-foreground mb-1">
                  Co-advisors: {student.cosupervisors}
                </p>}
                <p className="text-xs text-muted-foreground mb-0.5">{student.institution}</p>
                <p className="text-xs text-muted-foreground">{student.year}</p>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-6">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>© 2025 Francisco Almeida Maia. University of Porto, Faculty of Engineering.</p>
        </div>
      </footer>
    </div>;
};
export default Index;