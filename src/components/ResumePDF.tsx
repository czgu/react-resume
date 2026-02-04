import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import contact from "../data/contact";
import experiences from "../data/experiences";
import skills from "../data/skills";
import educations from "../data/education";
import projects from "../data/projects";

const styles = StyleSheet.create({
  page: {
    padding: "1cm",
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#bbb",
  },
  headerLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 25,
    fontFamily: "Helvetica-Bold",
  },
  tagline: {
    fontSize: 10,
    fontWeight: 500,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    width: 15,
  },
  contactText: {
    marginLeft: 5,
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  mainContent: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 10,
  },
  leftColumn: {
    flex: 3,
    borderRightWidth: 3,
    borderRightColor: "#bbb",
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionHeading: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "darkblue",
    borderBottomWidth: 2,
    borderBottomColor: "#bbb",
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 5,
  },
  positionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  positionTitle: {
    fontFamily: "Helvetica-Bold",
  },
  companyInfo: {
    fontSize: 9,
    marginLeft: 5,
  },
  timeText: {
    color: "darkgray",
    fontSize: 8,
  },
  bulletList: {
    marginLeft: 10,
    marginTop: 2,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 1,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
  },
  skillCategory: {
    marginVertical: 3,
    lineHeight: 1.4,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
  },
  educationItem: {
    marginBottom: 4,
  },
  schoolName: {
    fontFamily: "Helvetica-Bold",
  },
  educationDetails: {
    fontSize: 8,
    color: "darkgray",
  },
  projectItem: {
    marginVertical: 5,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
  },
  techStack: {
    fontSize: 8,
    color: "darkgray",
  },
});

const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.tagline}>{contact.tagline}</Text>
    </View>
    <View>
      <View style={styles.contactRow}>
        <Text style={styles.contactIcon}>P</Text>
        <Text style={styles.contactText}>{contact.phone}</Text>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.contactIcon}>E</Text>
        <Link style={[styles.contactText, styles.link]} src={`mailto:${contact.email}`}>
          {contact.email}
        </Link>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.contactIcon}>G</Text>
        <Link style={[styles.contactText, styles.link]} src={`https://${contact.github}`}>
          {contact.github}
        </Link>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.contactIcon}>L</Text>
        <Link style={[styles.contactText, styles.link]} src={`https://${contact.linkedin}`}>
          {contact.linkedin}
        </Link>
      </View>
    </View>
  </View>
);

const BulletList = ({ items }: { items: string[] }) => (
  <View style={styles.bulletList}>
    {items.map((item, i) => (
      <View key={i} style={styles.bulletItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

const Experience = () => (
  <View>
    <Text style={styles.sectionHeading}>EXPERIENCE</Text>
    {experiences.map((exp, index) => (
      <View key={index} style={styles.experienceItem}>
        <View style={styles.positionRow}>
          <Text style={styles.positionTitle}>{exp.position}</Text>
          <Text style={styles.companyInfo}>
            @{exp.company}, {exp.location}
          </Text>
        </View>
        <Text style={styles.timeText}>
          {exp.time.from}-{exp.time.to} {exp.time.notes || ""}
        </Text>
        <BulletList items={exp.descriptions} />
      </View>
    ))}
  </View>
);

const Projects = () => (
  <View>
    <Text style={styles.sectionHeading}>PROJECT HIGHLIGHTS</Text>
    {projects.map((project) => (
      <View key={project.name} style={styles.projectItem}>
        <View style={styles.projectHeader}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.timeText}>
            {project.time.from} - {project.time.to}
          </Text>
        </View>
        <Text style={styles.techStack}>{project.techStack.join(", ")}</Text>
        <BulletList items={project.descriptions} />
      </View>
    ))}
  </View>
);

const Skills = () => (
  <View>
    <Text style={styles.sectionHeading}>SKILLS</Text>
    {skills.map(([category, items], index) => (
      <View key={index} style={styles.skillCategory}>
        <Text>
          <Text style={styles.skillLabel}>{category}: </Text>
          <Text>{items.join(", ")}</Text>
        </Text>
      </View>
    ))}
  </View>
);

const EducationSection = () => (
  <View>
    <Text style={styles.sectionHeading}>EDUCATION</Text>
    {educations.map((edu, index) => (
      <View key={index} style={styles.educationItem}>
        <Text style={styles.schoolName}>{edu.school}</Text>
        <Text style={styles.educationDetails}>
          {edu.time.from} - {edu.time.to}
        </Text>
        <Text style={styles.educationDetails}>
          {edu.degree}, {edu.majors.join(", ")}
        </Text>
      </View>
    ))}
  </View>
);

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.leftColumn}>
          <Experience />
          <Projects />
        </View>
        <View style={styles.rightColumn}>
          <Skills />
          <EducationSection />
        </View>
      </View>
    </Page>
  </Document>
);
