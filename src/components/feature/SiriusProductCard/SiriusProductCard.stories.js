import { SiriusProductCard } from "./SiriusProductCard";

export default {
  title: 'Example/SiriusProductCard',
  component: SiriusProductCard,
  parameters: {
    layout: 'centered',
  },
  args: ['autodocs'],
};

export const ProductCard = {
  args: {
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_647181-MLU73119534126_122023-F.webp',
    title: 'Auriculares Inalámbricos Sony Wh-1000xm4',
    description: `El formato perfecto para vos.\nEl diseño over-ear brinda una comodidad 
    insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente \n
    del más alto nivel se convierte en el protagonista de la escena.`,
    productUrl: 'https://www.mercadolibre.com.ar/auriculares-inalambricos-sony-wh-1000xm4-color-negro/p/MLA16183555#reco_item_pos=0&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=8deec1e7-c1a8-44ff-9009-62d03647ee84&c_id=/home/navigation-recommendations-seed/element&c_uid=1ea06347-9d30-4a1b-8b48-16feee43def3&da_id=navigation&da_position=0&id_origin=/home/dynamic_access&da_sort_algorithm=ranker',
  }
}