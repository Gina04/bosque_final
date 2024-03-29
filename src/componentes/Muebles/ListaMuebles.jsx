import { useState, useEffect } from "react";
import{Link} from "react-router-dom";
import { fetchMuebles } from "./api";

/*const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  //] */
function ListaMuebles(){
  const[muebles, setMuebles]= useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const data= await fetchMuebles();
          fetchMuebles
          setMuebles(data);
          setLoading(false);
        
      }catch(error){
        console.error(error);
        setLoading(false);
      }
    };
    fetchData()
  },[]);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {muebles.map((mueble) => (
              <Link key={mueble.albumId} to={`/FurnitureDetail/${mueble.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={mueble.thumbnailUrl}
                    alt={mueble.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{mueble.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {mueble.id}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ListaMuebles;