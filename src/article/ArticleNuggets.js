import spiritual from '../image/Spiritual.jpg';
import life from '../image/life.jpg';
import financial from '../image/financial.jpeg';
import family from '../image/family.jpg';
import healthy from '../image/healthy.jpeg';

import html2pdf from 'html2pdf.js';

function ArticleNuggets() {
  

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
    const wrapper = document.createElement('section');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';
    wrapper.appendChild(clonedContent);

    const options = {
      margin: 0 ,
      filename: 'Articles_Nuggets_To_Help_Propel_Your_Life.pdf',
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
      <div className=" p-4 rounded text-black ">
        <p className=''>
        <a href='#section1' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
        SECTION 1 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(SPIRITUALITY)</span> </a>||   
        <a href='#section2' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'> SECTION 2 <span style={{ fontSize: '10px', fontWeight:"lighter", color:"black"}}>(GENERAL LIFE HACKS)ers</span></a> || <a href='#section3' className='text-blue-400 font-bold hover:underline hover:text-blue-400 font-bold'>
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
    <section className="block sm:hidden -mb-5 mt-2 py-4 sm:p-4 content">
      <div className=" rounded  " style={{fontSize:"10px"}}>
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
        <h1 className="font-bold text-blue-600 -mb-2 mt-0 sm:mt-5 sm:mb-0   lg:text-2xl md:text-2xl text-xl">
        NUGGETS TO HELP PROPEL YOUR LIFE IN SHAA ALLAH
        </h1>
        <div className="">{sidecontent}</div>
        <div className="">{downcontent}</div>
        
      </section>
      <section className='my-5'>
        <p className='mb-2  mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>I'm super excited to be able to share this with you.</p>
        <p className='mb-7  mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>Before we get too busy, let's get some mental boost.</p>
                <p className=' mb-0 lg:w-10/12 md:w-96 w-72 text-justify articles '>🌲 This write-up is divided into five sections for easy consumption. You can take a break after
                each section. </p>

                <p className=' articles mt-4 sm:mb-7 mb-5 lg:w-10/12 md:w-96 w-72 text-justify'>I know this writeup will take my time, but in times like this, humanity comes first. So test your
                resilience and discipline also by determining to get to the end.</p>
                <p className=' sm:mb-10 mb-5 lg:w-10/12 md:w-96 w-80 articles'>Let's dive right into it 
                </p>
            </section>
            <section>
            <h2 id='section1' className='articles sm:text-xl mb-3 text-blue-600 font-bold'>SECTION 1 (SPIRITUALITY)
            </h2>
            <img src={spiritual} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className='mt-3 mb-10 lg:w-10/12 md:w-96 articles w-72 text-justify'>It’s important to begin by highlighting that Islam encourages planning and foresight. In fact, you
            should have your goals for the year 2025 written down, especially if that’s the calendar system
            officially used in your country. This includes outlining plans for each month and week. However,
            we do not celebrate the new year or attribute any special significance to it beyond its function for
            counting time. If you prefer to use the Hijri calendar for your goal setting, that’s equally
            commendable. All the best.

            </p>
            <h1 className=' mb-5 lg:w-10/12 md:w-96 w-72  articles'>Over the past few months, our brothers and sisters have celebrated numerous achievements,
            including earning degrees and certifications, welcoming new children, entering into nikaah,
            receiving promotions, launching new businesses, expanding existing ventures, and much more.
            Baarokallahu feekum.

            </h1>
            <div className=''>
            <p className=' mb-5 text-justify'>Let's do more, we need all of them.
            </p>
            <p className=' mb-5 lg:w-10/12 md:w-96 w-72 articles '>
            I understand that things are tough for many people this time, especially in Nigeria, but that should not deter us from upholding the pristine Islam.

            </p>
            <p className=' mb-5 lg:w-10/12 md:w-96 w-72 articles '>
            Let's observe our daily prayers on time, let's continue to learn the religion, let's attend
            gatherings of knowledge (physically or virtually), let's recite the Qur'an a lot and memorise it as
            much as we can. Qiyam al-layl is very important. Do your morning, evening adhkaar and
            remember Allah a lot. Let's move away from sins and uphold goodness. Let's ask the
            knowledgeable ones if we don't know, let's refine our characters and be good to others.

            </p>

            <section>
            <h2 id='section2' className='articles sm:text-xl mb-3 mt-10 text-blue-600 font-bold'>SECTION 2 (GENERAL LIFE HACKS)
            </h2>
            <img src={life} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Don't dwell on your past successes or failures. Instead, aim to surpass your own records and
            push the boundaries of what’s possible. Only by doing so will you uncover your true potential.
            </p>

             <p className=' -mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             Your dressing speaks a lot about you. Don't joke with it, it matters.

             </p>
             <br />
             <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             Complain less and focus on self-improvement – your life will transform exponentially.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Don't break down because of a challenge. A challenge is only a wakeup call, you either wake up or continue sleeping. A challenge is nothing more than what it's called "a challenge". That means you can challenge and conquer it.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Think twice before you hire, but think 5 times before you fire. Not only in professional settings but also in personal relationships.


            </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Work hard and smart. Talent is not enough. As they say “Hard work will beat talent if talent
        doesn't work hard”.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        The era of rote memorization and cramming is gone but the advent of LLMs (Large Language
        Models like ChatGPT and Gemini) marks the final end. If it's about general information, LLMs
        have it more than you and we can consult them at any time. Thus, it's not about how much
        general information you have in your head, it's about how much you can apply to produce
        meaningful results. Sincerely, that's what the world needs right now and that should be the goal
        of schools
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Time runs fast right? Then start something that also runs fast with time. Plant a tree, invest
        wisely (buy halal shares and real estate), start a course, start a degree, start a business,
        improve your skills to improve your worth, the list is endless.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Whenever you tell yourself you don't have time for something important, remember that those
        who are achieving it might not have more time than you do. They're likely pushing their limits
        and making sacrifices. Therefore, those who are achieving something you admire may not be
        inherently better than you – they may simply be prioritizing differently and putting in the extra
        effort.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        It's a sign of weakness to quit quickly at the first sign of challenge if the goal is worthwhile.
        Instead of giving up, consider slowing down, taking a break, or adjusting your approach. You
        can modify the path or adjust the rules if possible. This is one of the secrets of high achievers.
        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Many people won't care about you until they see results. So why should you care about what
        people will say as you're striving to achieve your goal once it's something good? People don't
        see a swimmer under the water until he raises up his head at his destination.

        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Don't wait for anyone to discover you, discover yourself. When you discover yourself, then
        people might pick you up from there. So don't wait for opportunities to show up, show up for
        opportunities.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        I admire those who try and fail more than those who never try, especially when it's something
        that's worth giving a shot.



        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Stop living other people's lives, live your own life. Stop living your life just to please others.
        Follow your passion. If circumstances push you into a job you don’t like, start planning your
        transition to the path where your passion lies as soon as you can. That is where your true
        happiness lies.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Explore other fields when possible, confront your fears, and keep pushing your boundaries.
        You'll grow stronger and better equipped to succeed.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        I will conclude this section by emphasizing the importance of valuing and respecting our nation.
        Nigeria possesses intrinsic goodness—favorable weather, fertile soil, breathtaking landscapes,
        abundant rivers, and a population of intelligent, hardworking people. You can hold anyone you
        like accountable for the unmet needs of citizens, but we need to be mindful of how we speak
        about our country, especially in public or international settings. If we sell ourselves cheap, we cannot expect others to see our worth.

        </p>

        </section>
        </div>
        </section>

        <section>
            <h2 id='section3' className='articles sm:text-xl mb-3 mt-10 text-blue-600 font-bold font-bold'>SECTION 3 (FINANCIAL FREEDOM)
            </h2>
            <img src={financial} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Disclaimer: I'm also on my journey toward achieving financial freedom, so let's learn and grow together.

            </p>

             <p className=' -mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             Alejo lowo. O le wa, o le lo. <br/> (Money is a visitor. It can come and goes.)
             </p>
             <br />
             <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             But someone jokingly said that "then you should tie it down when it comes" and they’re
            absolutely right. You can 'tie it down' by saving it for a capital project, investing it for greater
            returns, starting a business, or using part of it to learn a skill that will increase your earning
            potential."
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            The good news is that you can achieve financial success whether you are an employee or a business owner.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify sm:translate-x-4'>
            ● As an employee, focus on continuously improving your skills to increase your earning
            potential. Invest wisely with the help of expert advice, explore side businesses you
            understand, and allow your wealth to grow over time.

            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify sm:translate-x-4'>
            ●  As a business owner, strategically position yourself and your business for success.
            Offer exceptional products or services, and sharpen your business skills, particularly in
            marketing and sales. Expand your operations thoughtfully and remain patient as your
            business grows.


            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            While there are differences between these two paths, this article won’t delve into them.
            However, if you’re curious to explore the distinctions, check out this [Link to the first article].

            </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        stifles your journey toward financial freedom. Over-saving without investing can trap your
        wealth, leaving it stagnant – neither growing nor serving any meaningful purpose. Instead, seek
        out mentors and connect with individuals who can guide you toward sound investments and
        profitable business opportunities.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        A major obstacle to financial success is a scarcity mindset – believing there's no money to be
        made, everyone is struggling, no one will buy your product or service, or that jobs are
        impossible to find. Shift your perspective to an abundance mindset and put your trust in Allah.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        People often say there's no money, yet land is bought, houses are built, cars are purchased,
        and lavish parties are hosted every single day. It all depends on how you position yourself and
        your product or service, targeting the right audience, and backing it all with unwavering
        determination and prayer.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Take the initiative to connect with your wealthy friends, colleagues, family members, or other
        successful individuals around you. Ask them to share insights about money and success that you might not know. Many will be willing to provide valuable advice. Success becomes more
        attainable when you learn directly from those who have already achieved it.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Let's patronize locally available goods and services. Anything you can get in your country, don't take the money outside. At the same time, let's strive to improve the quality of our products and services to match or surpass global standards.



        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        When you import goods, you import poverty and you export jobs to other parts of the globe
        where such goods are produced. - Aliko Dangote
        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Building wealth doesn't follow a fixed formula, so it's perfectly fine to experiment with different things intelligently.



        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Many employers generate income daily, and they are the ones you work for. You too can create
        a source of daily income through a side business or smart investments. This is where true
        wealth lies. Approach it calmly and nurture it consistently, ensuring it doesn’t interfere with your
        primary job. Over time, the results may surprise you.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        When a family member faces financial challenges and repeatedly asks for money, I often stop
        giving them cash directly. Instead, I use what little I have to empower them. Before you know it,
        he joins me in raising other family members. Imagine if every family adopted this approach –
        what would happen to poverty levels in the next few years?


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Don't save for tomorrow and punish yourself inappropriately. You're not sure if you'll be there to enjoy it tomorrow. Although you are saving not only for yourself, but be moderate. Save, invest and enjoy your life simultaneously. Eating good food will even prepare you to achieve more.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        I don't care about how much wealth you accumulate. What I care about is how many lives
        you’ve touched. How many people have you empowered?. How many smiles have you inspired,
        and how much light have you brought into homes and hearts? That’s what truly matters.
        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        The world might not experience a significant redistribution of wealth until we stop measuring
        success by personal wealth, but by the amount of positive impact we create in the lives of
        others.

        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Never value wealth above the rights of your fellow humans.

        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        An empire isn't built in a day. So be calm, enjoy your life and have fun during the journey
        </p>

        </section>
       
       
        <section>
            <h2 id='section4' className='articles sm:text-xl mb-3 mt-10 text-blue-600 font-bold font-bold'> SECTION 4 (STAYING HEALTHY)
            </h2>
            <img src={healthy} alt="imagesave" className=' my-5 heights w-72 sm:w-10/12 rounded '/>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            ● I’ll begin this section with this: <br/>
            The best time to start taking responsibility for your sound health is when you become conscious
            of your existence. The second best time is NOW. You need to prioritise your health.
            </p>

             <p className=' -mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             ● It's like a popular poem that you should:
             </p>
             <br />
             <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             ● Prioritize eating healthy foods and gradually eliminate unhealthy options from your diet.

            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            ● Stay well-hydrated by drinking sufficient water and include a good portion of vegetables
            in your meals.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            ● If you're not allergic, seafood can be a great addition to your diet as it offers numerous health benefits.


            </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Incorporate fruits into your diet as frequently as possible. However, it’s advisable to
        consult professionals for personalized recommendations, as this can be crucial for
        meeting your specific dietary needs.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● You chose honey over sugar, seeking a healthier alternative. But how would you feel if the
        honey turned out to be adulterated with sugar? Choose your vendors wisely!

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● One good thing is that there are always healthier and more nutritious alternatives to the
        harmful foods and drinks you consume. Explore these options, and if you're unsure, seek advice
        from a medical professional.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Engaging in regular exercise and undergoing routine medical checkups are beneficial
        practices. The frequency of both, however, depends on factors such as your current health
        status, risk factors, and age. Therefore, it is advisable to consult your doctor for personalized
        guidance.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Your health challenge can be conquered by Allah's grace. So don't hide it.

        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Abu Hurairah narrated that the Prophet (Peace be upon him) said:

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        "There is no disease that Allah has created, except that He also has created its treatment."

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Sahih Bukhari, Volume 7, Book 71, Number 582.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Therefore, consult a medical professional. Don't allow your health challenges to dictate your
        happiness or success. Remember, a person who is sick but happy and wealthy is in a better position than one who is sick, sad, and struggling financially. After all, you need financial
        resources to support your journey toward better health.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Get fresh air, surround yourself with people who love and care for you, and pursue the work
        you are passionate about. By Allah's grace, all of these will contribute to your well-being and
        happiness.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Exercise caution before entrusting your health to any practitioner.

        </p>

        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        ● Listen to your body’s signals and understand what works best for you, as you are a unique
        individual.

        </p>

        </section>

        <section>
            <h2 id='section5' className='articles sm:text-xl mb-3 mt-10 text-blue-600 font-bold font-bold'>SECTION 5 (FAMILY AND FRIENDS)
            </h2>
            <img src={family} alt="imagesave" className=' heights my-5 w-72 sm:w-10/12 rounded '/>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            The worst enemy is the one that doesn't exist but the one you create in your mind. It's hard to leave your heart because it doesn't exist in the first place. When was the last time you spoke to the person? When did you last see each other or exchange gifts? If you've been out of contact for a long time, Shayton will start planting negative thoughts in your mind. You'll notice that these thoughts change once you reach out, whether through a call or a visit. Personally, I live by the principle of not staying angry with someone I haven't heard from in a while.
            </p>

             <p className=' -mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             As the popular Arabic poem implies "...being out of contact for a long time endangers the love between two people".

             </p>
             <br />
             <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
             Let us forgive ourselves, strengthen our brotherhood, support each other sincerely, and love one another for the sake of Allah.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Building strong connections is crucial – this cannot be overstated. As the saying goes, "your
            network is your net worth." Never underestimate anyone, for you never know who Allah might
            use to help you in your time of need.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Empower your household, including your wife. Yes, if she has a passion for something that is
            permissible in Shariah and the circumstances in your home allow it, support her in pursuing it. You may be surprised by the positive impact this will have on you and your household. It may not always be easy, but in the end, you will thank Allah for the support.

            </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        No time is too much to spend with your loved ones.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Let me share a secret that can help strengthen your bond with family and friends: take time to
        go out with them to fun places, eateries, or just scroll out together – all within halal boundaries.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        If your home is unsettled, know that the one benefiting from it is Shayton. Disunity is his ultimate goal for your family. Always take the time to sit down and resolve any issues, and if necessary, seek guidance from a trusted counselor. This is incredibly important.

        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        If we loved enough, we could be happy together and the world's problems could be reduced to
        less than half.


        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Share joy, peace and happiness. Use whatever you have to do that. Nigerians really need this.
        Your friends and family really need it also.
        </p>
        </section>

        
        <section>
            <h2 id='section6' className='articles sm:text-xl mb-3 mt-7 font-bold text-blue-600 font-bold'>CONCLUSION
            </h2>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            You may have gained valuable insights from this article. It's important to develop your own revision strategies, as the main goal is for you to apply the lessons learned. Additionally, you can download the PDF version of this article from this webpage.

            </p>

            <h2 id='section7' className='articles font-bold sm:text-xl mb-3 mt-7 text-blue-600 font-bold'>
            Dedication
            </h2>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            This work is dedicated to the remarkable heroes who stood by and contributed to the great return.

             </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            May Allah help all Muslims wherever they are and the world at large. May He restore peace to
            the entire world.
            </p>
            <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
            Ramadhan is around the corner, let’s prepare adequately for it. May Allah grant us the best of it.
            </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        May Allah accept this as an act sincerely done for his sake and forgive my shortcomings.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Remember to share. It's a choice. But you can choose to benefit others and earn some rewards.
        I've done my quota.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Congratulations! Later in shaa Allah.
        </p>
        <p className=' mb-3 lg:w-10/12 md:w-96 w-72 articles text-justify'>
        Ma'a as-salaamah
        </p>
        <button
          onClick={downloadPDF}
          className="bg-blue-500 gap-2 flex mb-2 block sm:hidden justify-start align-start text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p>Download as PDF</p>

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
