import { Link } from 'react-router-dom';
import spiritual from '../image/Spiritual.jpg';
import life from '../image/life.jpg';
import financial from '../image/financial.jpeg';
import family from '../image/family.jpg';
import healthy from '../image/healthy.jpeg';

import html2pdf from 'html2pdf.js';

function ArticleNuggets() {
  

  const downloadPDF = () => {
    const content = document.getElementById('content');
  
    // Clone the content href=reserve oriinal
    const clonedContent = content.cloneNode(true);
  
    // Create a div that will contain the text to add to the PDF
    const additionalText = document.createElement('div');
    additionalText.innerHTML = `
     <div className='black my-2' style={{fontSize:"11px"}}>
        <a href='#section1' className='black my-2'>
          <strong>SECTION 1 (SPIRITUALITY)</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
        <a href='#section2' className='black my-2'>
          <strong>SpeakSECTION 2 (GENERAL LIFE HACKS)ers</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
        <a href='#section3' className='black my-2'>
          <strong>SECTION 3 (FINANCIAL FREEDOM)</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
        <a href='#section4' className='black my-2'>
          <strong>SECTION 4 (STAYING HEALTHY)</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
         <a href='#section5' className='black my-2'>
          <strong>SECTION 5 (FAMILY AND FRIENDS)</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
         <a href='#section6' className='black my-2'>
          <strong>CONCLUSION</strong>
        </a>
        </div>
        <div className='black my-2' style={{fontSize:"11px"}}>
         <a href='#section7' className='black my-2'>
          <strong>DEDICATION</strong>
        </a>
        </div>
    `;
  
    // Position the additional text at the top by appending it first
    clonedContent.insertBefore(additionalText, clonedContent.firstChild);
  
    // Apply inline styles for the PDF (black background, white text)
    clonedContent.style.backgroundColor = 'black';
    clonedContent.style.color = 'white';
    clonedContent.style.padding = '22px'; // Padding for better spacing
  
    const options = {
      margin: 0,
      filename: 'Articles_Nuggets.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    html2pdf().from(clonedContent).set(options).save();
  };


  const sidecontent = (
    <section className=" content sm:block hidden">
      <div className=" p-4 rounded text-black text-sm ">
        <p className=''>
        <a href='#section1' className='text-blue-400 font-bold text-sm hover:underline hover:text-blue-400 font-bold'>
        SECTION 1 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(SPIRITUALITY)</span> </a>||   
        <a href='#section2' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'> SECTION 2 </a><span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(GENERAL LIFE HACKS)ers</span> || <a href='#section3' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 3 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(FINANCIAL FREEDOM)</span> </a>
        </p>
        <p className=''>
        <a href='#section4' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 4 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(STAYING HEALTHY)</span>
        </a> || <a href='#section5' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 5 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(FAMILY AND FRIENDS)</span> </a> || <a href='#section6' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        CONCLUSION
        </a> || <a href='#section7' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        DEDICATION
        </a>
        </p>
       
        <button
          onClick={downloadPDF}
          className=" gap-2 flex justify-start align-start text-black py-2 rounded mt-2 -mb-4 hover:text-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p>Download as Pdf</p>

        </button>
      </div>
    </section>
  );
  const downcontent = (
    <section className="block sm:hidden -mb-5 mt-2 py-4 sm:p-4 content">
      <div className=" rounded text-black " style={{fontSize:"10px"}}>
        <p className=''>
        <a href='#section1' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 1 <span style={{ fontSize: '8px', fontWeight:"lighter", color:"black"}}>(SPIRITUALITY)</span> </a>||   
        <a href='#section2' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'> SECTION 2 </a><span style={{ fontSize: '8px', fontWeight:"lighter", color:"black"}}>(GENERAL LIFE HACKS)ers</span> <br /> <a href='#section3' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 3 <span style={{ fontSize: '8px', fontWeight:"lighter", color:"black"}}>(FINANCIAL FREEDOM)</span> </a> || <a href='#section4' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 4 <span style={{ fontSize: '8px', fontWeight:"lighter", color:"black"}}>(STAYING HEALTHY)</span>
        </a>
        </p>
        <p className=''>
         <a href='#section5' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 5 <span style={{ fontSize: '8px', fontWeight:"lighter", color:"black"}}>(FAMILY AND FRIENDS)</span> </a> || <a href='#section6' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        CONCLUSION
        </a> || <a href='#section7' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        DEDICATION
        </a>
        </p>
      </div>
    </section>
  );

  const content = (
    <section id="content" className="black sm:mb-20 mb-14 sm:px-4 sm:px-3">
      {/* Original Content (unchanged) */}
      <section>
        <h1 className="font-bold text-blue-600 -mb-2 mt-2 sm:mt-5 sm:mb-0   lg:text-2xl md:text-2xl text-xl">
        🚀🚀🚀 NUGGETS TO HELP PROPEL YOUR LIFE IN SHAA ALLAH
        </h1>
        <div className="">{sidecontent}</div>
        <div className="">{downcontent}</div>
        
      </section>
      <section className='my-5'>
        <p className='mb-2 text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>I'm super excited to be able to share this with you.</p>
        <p className='mb-2 text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>Before we get too busy, let's get some mental boost.</p>
                <p className='text-black mb-0 lg:w-10/12 md:w-96 w-72 text-justify'>🌲 This write-up is divided into five sections for easy consumption. You can take a break after
                each section. </p>

                <p className='text-black text-sm mt-4 sm:mb-7 mb-5 lg:w-10/12 md:w-96 w-72 text-justify'>I know this writeup will take my time, but in times like this, humanity comes first. So test your
                resilience and discipline also by determining to get to the end.</p>
                <p className='text-black sm:mb-10 mb-5 lg:w-10/12 md:w-96 w-80 '>Let's dive right into it �
                </p>
            </section>
            <section>
            <h2 id='section1' className='text-sm sm:text-xl mb-3 text-blue-600 font-bold'>SECTION 1 (SPIRITUALITY)
            </h2>
            <img src={spiritual} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className='text-black mt-3 mb-10 lg:w-10/12 md:w-96 w-72 text-justify'>It’s important to begin by highlighting that Islam encourages planning and foresight. In fact, you
            should have your goals for the year 2025 written down, especially if that’s the calendar system
            officially used in your country. This includes outlining plans for each month and week. However,
            we do not celebrate the new year or attribute any special significance to it beyond its function for
            counting time. If you prefer to use the Hijri calendar for your goal setting, that’s equally
            commendable. All the best.
            </p>
            <h1 className='text-black mb-5 lg:w-10/12 md:w-96 w-72  text-sm'>Over the past few months, our brothers and sisters have celebrated numerous achievements,
            including earning degrees and certifications, welcoming new children, entering into nikaah,
            receiving promotions, launching new businesses, expanding existing ventures, and much more.
            Baarokallahu feekum.
            </h1>
            <div className=''>
            <p className='text-black mb-5 text-justify'>Let's do more, we need all of them.
            </p>
            <p className='text-black mb-5 lg:w-10/12 md:w-96 w-72 text-sm '>
            I understand that times are tough for many this time, especially in Nigeria, but that should not deter us from upholding the pristine Islam.     
            </p>

            <section>
            <h2 id='section2' className='text-sm sm:text-xl mb-3 mt-7 text-blue-600 font-bold'>SECTION 2 (GENERAL LIFE HACKS)
            </h2>
            <img src={life} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Don't dwell on your past success or failure. Break your past records and keep pushing the
            boundaries of possibility. You won't know your true capability until you do this.
            </p>

             <p className='text-black -mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             Your dressing speaks a lot about you. Don't joke with it, it matters.
             </p>
             <br />
             <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             Complain less and focus on improving your life. You'll experience an exponential improvement.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Don't break down because of a challenge. A challenge is only a wakeup call, you either wake up or continue sleeping. A challenge is nothing more than what it's called "a challenge". That means you can challenge and conquer it.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Think twice before you hire, but think 5 times before you fire. Not just in a formal environment, but also in any relationship.

            </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Work hard and smart. Talent is not enough. As they say “Hard work will beat talent if talent
        doesn't work hard”.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        The era of cramming is gone but the advent of the LLMs (Large Language Models like ChatGPT
        and Gemini) marks the final end. If it's about general information, LLMs have it more than you and we can consult them at any time. Thus, it's not about how much information you have in your head, it's about how much you can apply to produce meaningful results. Sincerely, that's what the world needs and that should be the goal of schools.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Time runs fast right? Then start something that also runs fast with time. Plant a tree, invest wisely (buy halal shares and real estate), start a course, start a degree, start a business, improve your skills to improve your worth, the list is endless.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Whenever you say you don't have the time to do an important thing, know that those who are
        doing it might not have the time also. They are just pushing the walls. Thus, those who are
        achieving something you cherish might not be better than you.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        It's a sign of failure to quit quickly at the face of challenge if the goal is worthwhile. You can go slowly rather than quitting or rest a bit then continue. You can modify the path or adjust the rules if possible. This is one of the secrets of high achievers.

        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Many people won't care about you until they see results. So why should you care about what
        people will say as you're striving to achieve your goal once it's something good? People don't see someone swimming under the water until he raises up his head at his destination.

        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Don't wait for anyone to discover you, discover yourself. When you discover yourself, then
        people might pick you up from there. So don't wait for opportunities to show up, show up for
        opportunities.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        I love those who try and fail more than those who don't try if it's something that's worth giving a shot.


        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Stop living other people's lives, live your life. Stop living your life just to please others. Follow your passion. If situations force you to accept a job you don't like, plan to cross to where your passion lies as soon as you can. That is where your true happiness lies.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Study a bit of some other fields if you can, face your fears and keep pushing boundaries. You
        will be better equipped.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        I will end this section by stating that we need to value and respect our nation. Nigeria is
        intrinsically good - good weather, fertile soil, mountains, rivers, intelligent and hard working people and so on. You can hold anyone you like responsible for not benefiting the citizens as much as they want, but let's mind what we say about our country anywhere we go. If we sell ourselves cheap, others can't buy us expensively.

        </p>

        </section>
        </div>
        </section>

        <section>
            <h2 id='section3' className='text-sm sm:text-xl mb-3 mt-7 text-blue-600 font-bold font-bold'>SECTION 3 (FINANCIAL FREEDOM)
            </h2>
            <img src={financial} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Disclaimer: I'm also still in the journey of achieving financial freedom, so let's learn together.
            </p>

             <p className='text-black -mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             Alejo lowo. O le wa, o le lo. <br/> (Money is a visitor. It can come and go.)
             </p>
             <br />
             <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             But someone jokingly says that "then you should tie it down when it comes" and he's right. You can tie it down by saving it for a capital project, investing it for bigger returns, starting a business with it or use part of it to learn a skill that will earn you more.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            The good news is that you can become rich whether you are an employee or a business owner. As an employee, keep honing your skills to earn more, invest as much as you can with expert guidance, engage in a side business that you understand and allow your wealth to grow.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Think twice before you hire, but think 5 times before you fire. Not just in a formal environment, but also in any relationship.

            </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        As a business owner, position yourself and your business well. Have great products/services.
        Horn your business skills especially marketing and sales. Keep expanding your business
        strategically. Be patient for your business to grow.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        For sure, there are some differences between the two but it's beyond the scope of this article. (You can read this if you’re curious; )

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Be frugal to achieve your financial goals, but don't be too frugal to achieve financial freedom. Being too frugal might deceive you into locking your wealth with no investment - nothing goes in and nothing comes out. That is not a good idea, meet people who can lead you to good investments and businesses to put your money.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        One thing that will limit your financial prowess is scarcity mindset - no money anywhere,
        everyone is suffering, who will buy your product/service, no job anywhere and so on. What you
        should have is an abundance mindset and put your trust in Allah.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        No money, but people buy land, build houses, buy cars and throw expensive parties every
        blessed day. It all depends on how you position yourself and your product/service, targeting the right audience and back everything with relentless prayer.


        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Meet your rich friends, colleagues, family members and other rich people around you and ask
        them to tell you some things you don't know about money. Some of them will be willing to share useful information with you. It is easy to get there when you ask people who are already there.
        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Let's patronize ourselves. Anything you can get in your country, don't take the money outside. We should also work on the quality of our products and services.


        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Most employers earn daily and those are the people you work for. You can also have a side
        business or investment that gives you a daily income. That's where the real wealth resides. Do this calmly and grow it without it affecting your main job. You will be surprised about the result.


        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Building wealth doesn't have a constant formula, thus it's fine to try different things intelligently.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Study a bit of some other fields if you can, face your fears and keep pushing boundaries. You
        will be better equipped.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        If my family member has a financial challenge and constantly asks me for money. I usually stop giving the person and rather empower him from the little that I have. Before you know it, he joins me in raising other family members. If all families embrace this, what will happen to the poverty level in the next few years?
        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Don't save for tomorrow and punish yourself inappropriately. You're not sure if you'll be there to enjoy it tomorrow. Although you are saving not only for yourself, but be moderate. Save, invest and enjoy your life simultaneously. Eating good food will even prepare you to achieve more. I don't care about how much you have. What I care about is how many people you have helped. How many people have you empowered?. How many people have you brought happiness and sunshine to their lives and homes?.
        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        The world might not experience a significant distribution of wealth until we stop measuring
        success by personal wealth, but by the amount of positive impact we have on others..
        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Don't love wealth more than the rights of your fellow human.
        <br/>
        An empire isn't built in a day. So be calm, enjoy your life and have fun during the journey.
        </p>

        </section>
       
       
        <section>
            <h2 id='section4' className='text-sm sm:text-xl mb-3 mt-7 text-blue-600 font-bold font-bold'>📌 SECTION 4 (STAYING HEALTHY)
            </h2>
            <img src={healthy} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            📍I will start this section with this:<br/>
            The best time to start taking responsibility for your sound health is when you become conscious of your existence. The second best time is NOW. You need to prioritise your health.
            </p>

             <p className='text-black -mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             📍All things being equal, you can never regret going natural approach provided you avoid DIY and consult experts in the field.
             </p>
             <br />
             <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             📍It's like a popular poem that you should:
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            =&gt; Eat healthy food and abandon bad ones. This can be done gradually.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            =&gt; Drink enough water and have a good proportion of vegetables in your food.

            </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        =&gt; Sea foods generally are your friends if you are not allergic to them.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        =&gt; Take fruits as often as you can. However, you can meet professionals to recommend for you. There is a reason for that and it's very important.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍You opted for honey instead of sugar. How would you feel if the honey is an adulterated one
        made with sugar? Choose your vendors carefully!

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍One good thing is that there are always better and more nutritious alternatives for the harmful food and drink you take. Look for them and ask those who know if you don't know.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍Engaging in regular exercise and going for a general medical checkup are good. Their
        frequency is dependent on your current health status, risk factors, age, among others. Thus,
        consult your doctor for this.

        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍Your health challenge can be summoned and conquered by Allah's grace. So don't hide it.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Abu Hurairah narrated that the Prophet (Peace be upon him) said:

        </p>

        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        "There is no disease that Allah has created, except that He also has created its treatment."

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Sahih Bukhari, Volume 7, Book 71, Number 582.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Thus, talk to a medical practitioner. Also, don't let your health challenge determine the level of your happiness or success. Remember that a sick, happy and rich person is better than a sick, sad and poor person. You even need money for your health journey

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍Get fresh air, stay happy, be around people who love and care about you, do the job you
        have a passion for. All this will help you stay healthy by Allah's grace.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        📍Watch carefully before entrusting your health to a practitioner.
        Finally, listen to your body. Know what works for you - you are a unique human being.
        </p>

        </section>

        <section>
            <h2 id='section5' className='text-sm sm:text-xl mb-3 mt-7 text-blue-600 font-bold font-bold'>SECTION 5 (FAMILY AND FRIENDS)
            </h2>
            <img src={family} alt="imagesave" className=' heights my-5 w-72 sm:w-10/12 rounded '/>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            The worst enemy is the one that doesn't exist but which you made up in your mind. It's hard to leave your heart because it doesn't exist in the first place. When was the last time you spoke with the person, when last did you see each other and when last did you exchange gifts? If you've not been in contact for so long, shayton will start toying with your brain with several thoughts. You will see that the thought will change if you pick up your phone and call the person if you can't visit them physically. So I usually hold the principle of not being angry with the person I haven't heard from.
            </p>

             <p className='text-black -mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             As the popular poem implies "...not staying in contact for long endangers the love between two people".
             </p>
             <br />
             <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
             Let's forgive ourselves, strengthen the brotherhood, support ourselves sincerely and love one another genuinely and for Allah's sake.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Improve your connection. This can't be overemphasized. As they say "your network is your net worth". Don't underrate anybody, you don't know whom Allah can use to save you in the desert.
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Empower your household including your wife. Yes, if she has a passion for something that
            shariah permits and the situations in your home will give her the space to do it, then please support her. You will be surprised what goodness you would have done for yourself and your household if you do that. It might not always be a smooth ride, but you will thank Allah that you did at the end.


            </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        No time is too much to spend with your loved ones.
        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Let me tell you one of the secrets that can help you bond with your family and friends. Go out with them to fun places, eateries, or just scroll out together all in halal ways.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        If your home isn't settled, you know who is winning? Shayton. That is his highest goal for your home. You can always sit and resolve things. Also, you can get a trusted counselor if things are getting out of hand. This is very important.

        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        If we loved enough, we can be happy together and the world's problems could be reduced to
        less than half.


        </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        Share joy, peace and happiness. Use whatever you have to do that. Nigerians really need this.
        Your friends and family really need it.
        </p>
        </section>

        
        <section>
            <h2 id='section6' className='text-sm sm:text-xl mb-3 mt-7 font-bold text-blue-600 font-bold'>====CONCLUSION====
            </h2>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            You might have learnt a lot from this piece of work. Create your revision strategies because the major goal is for you to apply any lesson learnt from this article. You can also download the PDF version of this article at the bottom of the article's web page ().

            </p>

            <h2 id='section7' className='text-sm font-bold sm:text-xl mb-3 mt-7 text-blue-600 font-bold'>
            Dedication
            </h2>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            This long work should be dedicated to no one except the amazing heroes who stood by and
            contributed to the great return.
             </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            May Allah help all Muslims wherever they are and the world at large
            </p>
            <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
            Ramadhan is around the corner, prepare adequately for it. May Allah grant us the best of it
            </p>
        <p className='text-black mb-3 lg:w-10/12 md:w-96 w-72 text-sm text-justify'>
        May Allah accept this as an act sincerely done for his sake and forgive my shortcomings.
        </p>
        <button
          onClick={downloadPDF}
          className="bg-blue-500 gap-2 flex mb-2 block sm:hidden justify-start align-start text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p>Download as Pdf</p>

        </button>
        </section>
        </section>

  );

  return (
    <section className="flex w-full h-full bg-white justify-center items-center content">
        <div className="flex w-full h-full flex-row justify-around md:mx-10 lg:mx-24 sm:p-4 px-4 py-2 content lg:translate-x-16">
        {content}
        
        </div>
    </section>
  );
}

export default ArticleNuggets;
