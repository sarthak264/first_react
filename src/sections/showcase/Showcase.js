import "./Showcase.css";
import Card from '../../components/card/Card'

function Showcase() {
  return (
    <section className="Showcase" id="Showcase">
      {/* <div className="container px-0"> */}
        <Card 
        title='Fully Responsive Design' 
        text='When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it is a phone, tablet, or desktop the page will behave responsively!'
        src='./images/bg-showcase-1.jpg'/>
        <Card 
        title='Updated For Bootstrap 5' 
        text='Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!'
        src='./images/bg-showcase-2.jpg'/>
        <Card 
        title='Easy to Use & Customize' 
        text='Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!'
        src='./images/bg-showcase-3.jpg'/>
      {/* </div> */}
    </section>
  );
}

export default Showcase;
