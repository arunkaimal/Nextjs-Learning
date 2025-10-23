import Image from "next/image";
import ironMan from "@/public/iron-man.png";

const Home = () => {
  return (
    <>
      <section className="w-2xl p-5 mx-auto grid grid-cols-3 gap-7 mt-10">
        <div className="w-50 h-50 bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-20 h-20 mt-5 rounded-full">
            <Image
              src="/iron-man.png"
              width={500}
              height={500}
              alt="fav"
              className="w-full h-full rounded-full"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>

        {/* Second */}
        <div className="w-50 h-50 bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-20 h-20  mt-5 rounded-full">
            <Image
              src="/iron-man.png"
              width={500}
              height={500}
              alt="fav"
              className="w-full h-full rounded-full"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className="w-50 h-50 bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-20 h-20  mt-5 rounded-full">
            <Image
              src="/iron-man.png"
              width={500}
              height={500}
              alt="fav"
              className="w-full h-full rounded-full"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>
        {/* Fourth */}
        <div className=" bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-full h-full  rounded-full relative ">
            <Image
              src={ironMan}
              alt="fav"
              fill={true}
              quality={100}
              priority={false}
              placeholder="blur"
              blurDataURL=""
              className="rounded-2xl"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>
        {/* fifth */}
        <div className="w-50 h-50 bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-20 h-20  mt-5 rounded-full">
            <Image
              src="/iron-man.png"
              width={500}
              height={500}
              alt="fav"
              className="w-full h-full rounded-full"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>
        {/* sixth */}
        <div className="w-50 h-50 bg-slate-900 rounded-2xl hover:scale-105 duration-300 flex justify-center">
          <div className="w-20 h-20  mt-5 rounded-full">
            <Image
              src="/iron-man.png"
              width={500}
              height={500}
              alt="fav"
              className="w-full h-full rounded-full"
            />
            <div className="text-center">
              <h3>Iron Man</h3>
              <p className="text-sm">Marvel Hero</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
