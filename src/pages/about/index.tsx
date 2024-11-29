import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";

import Counts from "./components/Counts";

import Testimonials from "./components/Testimonials";
import Ourclients from "./components/Ourclients";
import { useGetSiteInfoListQuery } from "../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";
// import OurTeam from "./components/Ourteam";

export default function About() {
  const { data: siteInfoList  } = useGetSiteInfoListQuery() ?? [] ;
  const siteInfo=siteInfoList?.[0];
  return (
    <>
      <section className="mx-auto overflow-hidden container-fluid ">
        <section className="px-5 mx-auto md:container ">
          <Aboutus />
        </section>
        <section className="px-5 mx-auto ">
          <Banner />

          <Capabilities />
        </section>
        <section className="px-5 mx-auto md:px-0 bg-slate-100">
          <Ourclients />
        </section>

        <section className="bg-black container-fluid ">
          <Testimonials />
        </section>

        <section className="mx-auto md:px-0">
          <Counts awards={siteInfo?.projectHandled} designers={siteInfo?.teamCount} />
        </section>

        {/* <section className="container-fluid">
          <OurTeam />
        </section> */}
      </section>
    </>
  );
}
