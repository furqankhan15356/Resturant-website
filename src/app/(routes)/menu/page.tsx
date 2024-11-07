export default function Menu(){
    return(
        <div className="flex flex-col items-center justify-center bg-[#e6eadc] py-20 px-10 overflow-hidden">
            <div className="text-center p-8 px-4 md:px-8 lg:px-16">
            <img src="/Heading (1).png" alt="Image" className="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"/>
            <p className="mt-4 text-sm sm:text-base md:text-lg"> Lacus lobortis nullam nam consectetur fermentum mattis <br /> pellentesque id nulla. Risus convallis iaculis risus ac aliquam <br /> sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. <br /> Aliquam dolor egestas nam congue elit dolor.</p>
            </div>
         
            <div className="grid-cols-6 gap-4 p-4 hidden sm:grid">
                <img src="/Menu-options (5).png" alt="Image" className="hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-slate-200"/>
                <img src="/Menu-options (1).png" alt="Image" className="hover:shadow-lg hover:scale-105 transition-transform duration-300 pl-5"/>
                <img src="/Menu-options (2).png" alt="Image" className="hover:shadow-lg hover:scale-105 transition-transform duration-300"/>
                <img src="/Menu-options (3).png" alt="Image" className="hover:shadow-lg hover:scale-105 transition-transform duration-300"/>
                <img src="/Menu-options (4).png" alt="Image" className="hover:shadow-lg hover:scale-105 transition-transform duration-300"/>
            </div>
           
            <div className="grid lg:grid-cols-4 sm:grid grid-cols-1 lg:gap-4 gap-4 lg:p-4 pl-16 pr-16 justify-center">
               <img src="/Menu-photo.png" className="transition-transform hover:scale-105 rounded-xl" alt="Image" />
               <img src="/Menu-photo (1).png" className="transition-transform hover:scale-105 rounded-xl" alt="Image" />
                <img src="/Menu-photo (2).png" className="transition-transform hover:scale-105 rounded-xl" alt="Image" />
                <img src="/Menu-photo (3).png" className="transition-transform hover:scale-105 " alt="Image" />
            </div>
            {/* MENU NAMES*/}
            <div className="grid-cols-4 gap-4 p-4 hidden sm:hidden">
                <img src="/Menu-name.png" className="items-start pr-20" alt="Image" />
                <img src="/Menu-name (1).png" className="items-center pl-3" alt="Image" />
                <img src="/Menu-name (2).png" className="items-center pl-24" alt="Image" />
                <img src="/Menu-name (3).png" className="items-center pl-16" alt="Image" />
            </div>
       
             <div className="w-full h-full p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 md:pl-16 mt-12">

    <div className="flex justify-center md:justify-start">
      <img 
        src="\menu-photo (4).png" 
        height={300} 
        width={450} 
        className=" transition-transform hover:scale-105 object-contain rounded-xl" 
        alt="Image" 
      />
    </div>
  
  
    <div className="flex justify-center md:justify-end">
      <img 
        src="/menu-topics.png" 
        height={300} 
        width={550} 
        className="mt-12 mb-8 md:mt-28 pr-32" 
        alt="Image" 
      />
    </div>
  
    {/* Content Section */}
    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
      <img src="/menu-name (4).png" alt="Image" />
      <h4 className="mt-2 pl-2 text-lg font-sans font-semibold">$8</h4>
      <p className="mt-1 pl-2 text-lg font-sans text-center md:text-left">
        2 oz silver tequila, 1 oz cointreau, 1 oz lime juice, salt for the rim
      </p>
    </div>
  </div>
  </div>
  
  </div>
    )
  }