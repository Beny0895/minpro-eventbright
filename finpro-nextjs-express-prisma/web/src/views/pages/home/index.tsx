import FindEventPage from "@/app/find-event/page";
export default function HomeView() {
  return (
    <div className="pt-32 pb-10 bg-black">
     <h1 className=" text-center text-7xl font-serif font-bold pb-10 ">Unlimited Creativity with Event Bright</h1>
      <div className="pt-15 pb-10  text-white">
      <p className="text-center text-3xl font-serif ">Get high-quality events</p>
      <p className="text-center text-3xl font-serif ">with our extensive experienced team</p>
      <p className="text-center text-3xl font-serif ">We help to achieve the success of your event</p>
      <div className="pt-20 ">
      <div className="flex items-center">
       <img src="https://cdn.evbstatic.com/s3-build/fe/build/images/6505927c261d9e1851a3060027437974-holiday_category_desktop.webp "/>
      </div>
       <div className="pt-20">
        <h1 className="font-bold text-center text-4xl pb-10 text-s">Find Your Events</h1>
        <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/a_organizer_event--creator-eventbrite-.webp"/>
      </div>
        <div className="bg-white pt-20">
         <h1 className="text-blue-950 text-4xl font-serif text-center font-bold pb-10 ">Hosting acaramu menjadi mudah</h1>
          <p className="text-blue-950 font-serif font-bold text-center text-2xl">Buat acara secara  dengan mudah di platform yang disukai dan dipercaya oleh peserta</p>
          <div className="flex items-center text-center pt-10 ">
         <img src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/organizer--eventbrite--host-events--001.webp"
         className="w-2/4 h-2/4"/>
         <h1 className="text-black text-4xl font-serif">Temukan Hal Menarik</h1>
        </div>
      </div>
      </div>
      </div>

      <div>
        <FindEventPage/>
      </div>
    </div>
    
  );
}
