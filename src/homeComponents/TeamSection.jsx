import { teamMembers } from "../constants";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import person4 from "../assets/images/person4.png";
import person5 from "../assets/images/person5.png";

const TeamSection = () => {
  return (
    <>
      <section className="text-center px-12 mt-10">
        <h1 className="text-[2rem] font-bold">Meet Our Beautiful Team</h1>
        <div className="w-[60%] m-auto">
          <p className="mt-5">
            We are a passionate and diverse group of professionals, driven by innovation and a shared commitment to delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Team members grid */}
      <section className="flex flex-wrap flex-col md:flex-row justify-center pb-14 px-16 gap-32 mt-24 md:mt-40">
        {teamMembers.map((member, index) => (
          <div key={index} className="basis-[20%]">
            <div className="bg-[#003311] rounded-[50%] h-[16.6rem] flex justify-center items-center">
              <img
                className="md:w-[100%] rounded-[50%]"
                style={{
                  height: member.imageHeight,
                  marginBottom: member.marginBottom,
                }}
                src={member.image}
                alt={`Team Member ${index + 1}`}
              />
            </div>
            <div className="text-center">
              <p className="font-bold">{member.name}</p>
              <p className="text-[#0b0c0b] text-[0.8rem] mt-1">{member.role}</p>
              <p className="text-[0.6rem] mt-2">{member.email}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default TeamSection