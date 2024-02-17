import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css";
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProducDetail = () => {

    const context = useContext(ShoppingCartContext)
    if (!context.productToShow || !context.productToShow.images) {
        return null; // o puedes retornar algún componente de "cargando" o "no se encontró el producto"
    }

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
            <section className=" flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl"> Detail </h2>
                <XMarkIcon 
                onClick={()=> context.closeProductDetail()}
                className='h-6 w-6 text-black'></XMarkIcon>
            </section>

            <figure className="px-6">
                <img 
                className=" w-full h-full rounded-lg" 
                src={context.productToShow.images[0]} 
                alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className=" font-medium text-2xl mb-4">${context.productToShow.price}</span>
                <span className=" font-medium text-md" >${context.productToShow.title}</span>
                <span className=" font-ligth text-sm">${context.productToShow.description}</span>
            </p>
        </aside>
    );
}
export default ProducDetail;