import Image from "next/image";
function HeroSection() {
  return (
    <div className="grid grid-rows-1 justify-center items-center   bg-[url('/backgroundimage.png')]">
      <section>
        <div className="relative  z-30 h-[500px] w-[550px] mx-auto mt-40 mb-20 flex items-center justify-center">
          {/* Base Image */}
          <Image
            src="/Gft-1.png"
            width={550}
            height={550}
            alt="gtf-img"
            className="absolute mt-6   "
          />

          {/* Main Logo */}
          <Image
            src="/logo1.png"
            alt="logo"
            width={300}
            height={300}
            className="absolute  animate-moveUpDown"
          />

          {/* Overlay Image */}
          <Image
            src="/gentop-2.png"
            alt="overlay"
            width={524}
            height={550}
            className="ml-3 absolute  "
          />
        </div>

        {/* <div className="text-center text-3xl md:text-7xl font-extrabold pb-10"> */}
        {/* <div>
          {/* <p className="text-center ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. since the 1500s,
          </p> */}
        {/* <h1>Tokens</h1> */}
        {/* </div> */}
        {/* <div className="text-center text-sm md:text-xl">
          <h2 className="text-amber-400">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. since the 1500s,
          </h2>
        </div> */}
      </section>
    </div>
  );
}

export default HeroSection;
