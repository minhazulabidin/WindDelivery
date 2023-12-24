import Service from "./Service";

const OurService = () => {
  const services = [
    {
      "id": 1,
      "title": "Online Order",
      "description": "Conveniently purchase items or services via the internet, offering ease and accessibility for customers to make purchases remotely.",
      "img": 'https://i.ibb.co/X57YkDv/Group-9.png'
    },
    {
      "id": 2,
      "title": "Fast delivery",
      "description": " Expedited shipping or transportation services that ensure prompt and quick delivery of goods or services to customers within a short timeframe.",
      "img": 'https://i.ibb.co/QY1c04f/Group-8.png'
    },
    {
      "id": 3,
      "title": "Takeaway",
      "description": " Provides customers with the option to collect their ordered items or food from the establishment, typically for consumption elsewhere, offering a convenient way to enjoy products off-premises.",
      "img": 'https://i.ibb.co/X57YkDv/Group-10.png'
    }
  ]

  return (
    <div className="text-center mt-10 space-y-3 container mx-auto">
      <h1 className="text-5xl font-semibold text-color"> <span className="text-color2"> Our</span> Services</h1>
      <p className="text-lg">Your favorite food partner</p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          />)
        }
      </div>
    </div>
  );
};

export default OurService;
