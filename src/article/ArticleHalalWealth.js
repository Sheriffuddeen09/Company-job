import { Link } from 'react-router-dom';
import save from '../image/save.jpg';
import video from '../image/video.png'
import savemoney from '../image/savemoney.jpg';
import crownfunding from '../image/crowdfunding.jpeg';
import partner from '../image/partner.jpeg';
import business from '../image/business.webp';
import investing from '../image/inventor.png';
import interest from '../image/interest.jpg';
import capitalist from '../image/capitalist.jpeg';
import Incubators from '../image/incubator.webp';
import incentives from '../image/incentive.jpg';
import asset from '../image/assest.jpeg';
import connections from '../image/connection.jpg';
import html2pdf from 'html2pdf.js';

function ArticleHalalWealth() {
  

  const downloadPDF = () => {
    const content = document.getElementById('content');
    const button = document.querySelector('.no-print'); // Select the button

    // Hide the button temporarily
    if (button) button.style.display = 'none';
    // Clone the content to preserve original
    const clonedContent = content.cloneNode(true);
  
    // Create a div that will contain the text to add to the PDF
    const additionalText = document.createElement('div');
    // Position the additional text at the top by appending it first
    clonedContent.insertBefore(additionalText, clonedContent.firstChild);
  
    // Apply inline styles for the PDF (black background, white text)
    clonedContent.style.padding = '40px'; // Padding for better spacing
    const wrapper = document.createElement('section');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';
    wrapper.appendChild(clonedContent);

    const options = {
      margin: 0 ,
      filename: 'Articles_Halal_Wealth.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    html2pdf()
    .from(wrapper)
    .set(options)
    .save()
    .then(() => {
      // Restore the button visibility after the PDF is downloaded
      if (button) button.style.display = 'flex';
    });
  };
  


  
  const sidecontent = (
    <section className=" content sm:block hidden">
      <div className=" p-4 rounded articles text-blue-600">
        <p className=''>
          Host: <span style={{ fontSize: '12px', color:"gray"}}>Taofiq Akinpeju</span> ||  Speakers: <span style={{ fontSize: '12px', color:"gray"}}>Kayode Quadri | Dr Kazeem Salam | Ust. Taofeeq AbdusSalaam</span>
        </p>
        <p className=''>
          Summarised by: <span style={{ fontSize: '12px', color:"gray"}}>Abu Muhammad Oladitan Saliu</span> || 
Date: <span style={{ fontSize: '12px', color:"gray"}}>17th December, 2022</span>
        </p>
        <p className=''>
        </p>
        <button
    onClick={downloadPDF}
    className="gap-2 flex justify-start no-print items-center text-blue-600 py-2 rounded mt-2 -mb-4 hover:text-blue-400 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
    <p>Download as PDF</p>
  </button>
      </div>
    </section>
  );

  const downcontent = (
    <section className="block sm:hidden -mb-5 mt-2 py-4 sm:p-4 px-3  content">
      <div className="p-1 w-64 rounded articles text-blue-600">
        <p className=' text-black text-sm'>
          Host: <span style={{ fontSize: '10px',color:"gray" }}>Taofiq Akinpeju</span>
        </p>
        <p className=' text-black text-sm'>
          Speakers: <span style={{ fontSize: '10px',color:"gray"}}>Kayode Quadri | Dr Kazeem Salam | Ust. Taofeeq AbdusSalaam</span>
        </p>
        <p className=' text-black text-sm'>
          Summarised by: <span style={{ fontSize: '10px',color:"gray"}}>Abu Muhammad Oladitan Saliu</span>
        </p>
        <p className=' text-black text-sm'>
          Date: <span style={{ fontSize: '10px',color:"gray"}}>17th December, 2022</span>
        </p>
       
      </div>
    </section>
  );


  const content = (
    <section id="content" className="articles text-blue-600 sm:mb-20 mb-5">
      {/* Original Content (unchanged) */}
      <section>
        <h1 className="font-bold text-blue-600 -mb-2 sm:mb-0  lg:text-4xl md:text-2xl text-xl px-4">
          HALAL WEALTH CREATION FORMULA(S)
        </h1>
        <div className="">{sidecontent}</div>
        <div className="">{downcontent}</div>
        <Link to={'https://www.youtube.com/watch?v=gXBc9-CPfDo'}>
          <img
            src={save}
            alt="imagesave"
            className="relative heights left-2 w-72 sm:w-10/12 flex mt-5 justify-center items-center flex-column rounded"
          />
          <img
            src={video}
            alt="imagesave"
            className="absolute top-80 mt-8 lg:mt-5 md:mt-3 lg:left-96 left-24 md:left-56 translate-x-16 sm:w-12 sm:h-12 w-8 h-8 scales rounded"
          />
        </Link>
        <p className="text-sm articles text-blue-600 mt-3 sm:mb-10 mb-5 text-center">Complete video</p>
      </section>
      <section>
                <h2 className='articles text-blue-600 mb-0 lg:w-10/12 md:w-96 '>I'm happy to offer you a minified summary and personal additional notes to one of the finest events held about generating halal income this year. I see it as a duty because Muslims really need it. </h2>
                <p className='articles text-blue-600 text-sm mt-4 sm:mb-7 mb-5'>Let's start...</p>
                <p className='articles text-blue-600 sm:mb-10 mb-5 lg:w-10/12 md:w-96 '>I congratulate you for finding this piece of work and wanting to read it. It's worth the time. You will be better off.
                </p>
            </section>
            <section>
            <h2 className='text-sm sm:text-xl mb-3 text-blue-600'>ISE OMO ALASE JE, OWO OMO ALASELA </h2>
            <img src={savemoney} alt="imagesave" className='relative heights left-2 w-72 sm:w-10/12 rounded '/>
            <p className='articles text-blue-600 mt-3 mb-10 text-center' style={{fontSize:"11px"}} >Cited by Dr Kazeem Salam (Yoruba proverb for the wise)</p>
            <h1 className='articles font-bold mb-5 lg:w-10/12 md:w-96 text-sm '>* WORKING FOR SALARY/WAGES IS FOR EATING FOOD AND PAYING BILLS ONLY (most times), BUT BUSINESS/PROFIT IS TO MAKE YOU RICH AND WEALTHY! Be wise!
            </h1>
            <div className='sm:translate-x-2 px-1'>
            <p className='articles text-blue-600 mb-5 lg:w-10/12 md:w-96 w-72 text-justify'>However, migrating from being an employee to an employer should be gradual. I will advise you to gather enough money, education (financial education), experience, materials and confidence needed before you switch. It's also true that not all businesses need a lot of experience and money to start, you will learn and acquire more funds as you progress. Don't allow anything to hold you back if you're convinced and determined. Your readiness, having a sound business idea and proper planning, all crowned with prayer are more important than the capital for a business to be successful. Even having a sound idea with proper planning will attract the right funding.
            </p>
            <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm'>
            1. It's about you identifying a problem, finding a solution, money will always follow - Kayode Quadri.
            
            </p>
            <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            2. Also have a cushion . That is something to fall *forward to (don't fall back, but fall forward). Having a good reserve will give you the confidence when starting your new adventure - the entrepreneurship journey. Expect the ups and downs. You should know the level of your failure tolerance and outline your recovery plans.
            </p>
             <p className='articles text-blue-600 -mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             3. If you know you don't have what it takes to become a full time entrepreneur now, you can start by investing in real estate, buying halal stocks, mutual funds, and investing in businesses you understand which someone else can manage for you while you still keep your beloved job. What is bad is relying solely on income from a job (your physical effort), it's highly risky. "An unreliable money is the money that stops when you stop working''  - Oladitan Saliu. Don't wait until your retirement approaches before you start thinking about what to retire *into.
             </p>
             <br />
             <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            4. Also, before going into entrepreneurship, seek professional counsel, don't act blindly so that you won't lose everything at the end. Do your SWOT analysis... know your (STRENGTHS, WEAKNESSES, OPPORTUNITIES and THREATS). That (good) passion (of yours) can be turned into profit - Ust. Taofeeq. Especially, meet people who are already successful in the domain you want to venture into for advice before you start. Have good mentors and role models. Don't be shy to approach people for advice - many people are ready to render you a helping hand. But be careful with whom you share your ideas.
            </p>
            <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            5. The Pareto Principle states that 20 percent of your activities will account for 80 percent of your results. Try to do as many things as possible rightly in your business for a favourable outcome. Don't be selfish, form partnership with brighter minds if you need to. As the saying goes "if you want to go fast, go alone, if you want to go far, go together". Have a cooperation mindset and not the usual and destructive competition mindset. But, choose your partners wisely.
            </p>
            <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            6. I congratulate you for reading this far. It's worth the time. Read to the end. Take the whole dose - you're better off. 
            </p>
        <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        7. All of us, we are products of our knowledge and experience. That's what makes whatever decision we take - Kayode Quadri. So what are you putting into your head and who are you listening to? We need to do a mindset engineering, changing the mindset of the Muslims - Ustadh Taofeeq. Not everything is haram, you can do legitimate business and make halal money. If a muslim can't offer what you want, doing business with a non-muslim is not forbidden if it won't impact your religion negatively.
        </p>
        <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        8. You can determine your *possible financial future by examining two things. First, what are you spending your time on? Second, what are you spending a higher portion of your money on - (liabilities or assets)?. Simply put, liabilities take money away from your pocket and can cause you to lose more money. While an asset is something you are spending on/investing in now which will later put money in your pocket and allows you to make more money now or in the future.
        </p>
        <p className='articles text-blue-600 mb-2 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        9. To be honest, the world we live in now is driven by technology, use it to your advantage. While many people are seriously busy wasting their time online, you can turn it into a money-making platform for yourself. "Change is inevitable, if you stick to the old system, you and your business will become history" - Oladitan Saliu.  
        </p>
        </div>
        </section>
        <section>
            <p className='my-5 lg:w-10/12 md:w-96 w-72 text-2xl text-blue-600 text-justify'>Some of the ways to raise money for a business idea or for business expansion.</p>
            
    <div className='grid lg:grid-cols-5 lg:mx-28 md:mx-10 md:-translate-x-6 lg:-translate-x-16 my-5 md:grid-cols-3 grid-cols-2 gap-3 text-center '>
        <div>
        <img src={partner} alt="imagesave" className='w-60 h-20 lg:w-32 md:w-32 rounded '/>
            <p className='articles text-blue-600' style={{fontSize:"10px"}}>Partnership</p> 
        </div>
        <div>
        <img src={crownfunding} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Crowdfunding</p>
        </div>
        <div>
        <img src={business} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Business grant</p>
        </div>
        <div>
        <img src={investing} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Angel investors</p>
        </div>
        <div>
        <img src={interest} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Non-interest loan</p>
        </div>
        <div>
        <img src={capitalist} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"12px"}}>Venture capitalist</p>
        </div>
        <div>
        <img src={Incubators} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Business Incubators</p>
        </div>
        <div>
        <img src={incentives} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Government incentives</p>
        </div>
        <div>
        <img src={asset} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Work to raise money/sell your assets</p>
        </div>
        <div>
        <img src={connections} alt="imagesave" className='w-60 h-20 lg:w-36 md:w-32 rounded '/>
        <p className='articles text-blue-600' style={{fontSize:"10px"}}>Friends, family, network and connections</p>
        </div>
    </div>
        <p className='articles text-blue-600 my-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>(Learn about each method and know the best ways to tap into them.)</p>
<div className='lg:translate-x-12 md:translate-x-3 px-1'>
        <p className='articles text-blue-600 mb-2 lg:w-9/12 md:w-96 w-72 text-sm text-justify'>
        * When starting a business, please think big. Dream of your business becoming a big business one day. This will help you to have a better plan for your business before you start.
        </p>
        <p className='articles text-blue-600 mb-2 lg:w-9/12 md:w-96 w-72 text-sm text-justify'>
        * Lastly, the comfort, *freedom (long-term goal though), joy and self-fulfilment that owning your business can grant you is enormous if you are patient enough to see it through.
        </p>
        <p className='articles text-blue-600 mb-2 lg:w-9/12 md:w-96 w-72 text-sm text-justify'>
        * So baarokallohu feek if you can achieve it. If you can, please go for it. Don't settle for a life that's less than the one you're capable of living. It's worth it and the society needs you.

        Whatever you become in life, be the best at it, leave this world better than the way you met it and never die except as a true muslim.
        </p>
        <p className='articles text-blue-600 mb-3 lg:w-9/12 md:w-96 w-72 text-sm mt-5 text-justify'>
        <h2 className='text-sm sm:text-sm font-bold mb-3 text-blue-600'>📜 Don't forget: </h2> 
        <p className='mb-3 articles text-blue-600'>..ISE OMO ALASE JE, OWO OMO ALASELA!</p>
        <h2 className='text-sm sm:text-sm font-bold mb-1 text-blue-600'>📜 Remember also: </h2>  
        <p className='mb-5 articles text-blue-600'>"Complaint has never changed anything, but proper action always does" - Oladitan Saliu</p>
        <p className='mb-4 articles text-blue-600'>☘Wishing you all a successful, happy, righteous and fun-filled life.</p>
        <p className='mb-4 articles text-blue-600'>🌲Ultimately, may Allah grant us all Al-jannah Al-Firdaws.</p>
        <p className='mb-4 articles text-blue-600'>🙏🏾Please pardon me wherever I might have erred, all perfection belongs to Allah.</p>
        <p className='mb-4 articles text-blue-600'>📱📲Remember to share. It's a choice. But you can choose to benefit others and earn some rewards. I've done my quota.</p>
        <p className='mb-4 articles text-blue-600'>🤝 Congratulations and bye for now. Later in shaa Allah.</p>
        <p className=' sm:-mb-6 articles text-blue-600'>🪴 Ma'a as-salaamah...</p>
        </p>
        <button
          onClick={downloadPDF}
          className="bg-blue-500 gap-2 flex mb-10 block sm:hidden justify-start align-start text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p>Download as PDF</p>

        </button>
    </div>
            </section>
        </section>
  );

  return (

    <section className="flex w-full h-full bg-white justify-center items-center content">
        <div className="flex w-full h-full flex-row justify-around md:mx-10 lg:mx-24 sm:p-4 p-2 content lg:translate-x-16 md:translate-x-10">
        {content}
       
        </div>
    </section>
  );
}

export default ArticleHalalWealth;
