"use client";
import RelatedProjects from "@/components/projects/RelatedProject";
import { projectsData } from "@/data/projectData";
import { ProjectTypes } from "@/helpers/types/project";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import { TwitterShare, LinkedinShare, WhatsappShare } from "react-share-kit";

type Props = {
  data: ProjectTypes;
};

export default function ProjectSingle() {
  const [data, setData] = useState<ProjectTypes | undefined>(undefined);
  const { slug } = useParams();
  const project = projectsData.filter(
    (project) => project.id === parseInt(slug[0])
  )[0];

  const fetchData = async (): Promise<ProjectTypes | undefined> => {
    try {
      const res = await axios.get("/data/project.json");
      const selectedData = res.data.filter(
        (item: any) => item.id === parseInt(slug[0])
      )[0];
      setData(selectedData);
      return res.data;
    } catch (error) {
      throw new Error("An unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return (
    <div className="container mx-auto">
      <div>Project Not Found</div>
    </div>
  )

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {data?.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {data?.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {data?.category}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {data?.images.map((project, index) => {
          return (
            <div className="mb-10 sm:mb-0" key={index}>
              <Image
                src={project}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={"image"+ index}
                key={index}
                width={1000}
                height={900}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          {/* <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://stoman.me"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}

          {/* Single project objectives */}
          {/* <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </div> */}

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              Technologies
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {data?.info.technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              Share This
            </p>
            <div className="flex gap-4">
            <TwitterShare round size={50} title={data?.title} url={window.location.href} />
            <LinkedinShare round size={50} title={data?.title} url={window.location.href} />
            <WhatsappShare round size={50} title={data?.title} url={window.location.href} />
            </div>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 mt-10 sm:mt-0">
          
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            DETAILS
          </p>

          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">Objective</p>
          <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {data?.content}
          </p>

          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">Features</p>
          {data?.info.features.map((details, index) => {
            return (
              details.feature.map((item,index) => (
                  <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">{`${String(index +1)}. ${item}`}</p>
              ))
            )
          })}
        </div>
      </div>

      <RelatedProjects />
    </div>
  );
}
