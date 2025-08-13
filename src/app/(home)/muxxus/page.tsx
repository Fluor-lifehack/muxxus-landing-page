import { getMainPage } from "@/lib/helper/contentConverter";
import { 
  MuxxusHero, 
  MuxxusAbout, 
  MuxxusService, 
  MuxxusTeam, 
  MuxxusFeature,
  MuxxusContactBanner 
} from "@/components/muxxus";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import { getAllPages } from "@/lib/helper/contentConverter";
import MuxxusWork from "@/components/work/muxxus/MuxxusWork";
import SeoData from "@/components/tools/SeoData";
import StatMuxxus from "@/components/muxxus/StatMuxxus";


const Muxxus = () => {
  const { data: hero } = getMainPage("/heros/muxxus-hero.mdx");
  const { data: about } = getMainPage("/about/muxxus-about.mdx");
  const { data: service } = getMainPage("/services/muxxus/_main.mdx");
  const services = getAllPages("/services/muxxus");
  const works = getAllPages("/works/muxxus");
  const { data: team } = getMainPage("/team/muxxus/_main.mdx");
  const teamMembers = getAllPages("/team/muxxus");
  const { data: statFact } = getMainPage("/funFact/muxxus-stat.mdx");
  const { data: feature } = getMainPage("/features/muxxus-features.mdx");


  return (
    <main>
      <BindBtnMoveEffect />
      <SeoData
        title="Muxxus"
        description="Muxxus Website"
      />
      <MuxxusHero {...hero} />
      <StatMuxxus {...statFact}/>
      <MuxxusAbout {...about} />
      <MuxxusService {...service} services={services} />
      <MuxxusFeature {...feature} />
      <MuxxusWork works={works} />
      <MuxxusTeam teamMembers={teamMembers} {...team} />
      <MuxxusContactBanner 
        contactTitle="Ready to get started?" 
        btn_text="Contact Us" 
      />
    </main>
  );
};

export default Muxxus;
