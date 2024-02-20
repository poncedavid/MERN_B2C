import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css";


const CheckOutSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    if (!context.productToShow || !context.productToShow.images) {
        return null; // o puedes retornar algún componente de "cargando" o "no se encontró el producto"
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
            <section className=" flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl"> My Orders </h2>
                <XMarkIcon 
                onClick={()=> context.closeCheckoutSideMenu()}
                className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
            </section>
        </aside>
    );
}
export default CheckOutSideMenu;