import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'outline';
  tamanho?: 'padrao' | 'grande';
  href?: string;
}

const Botao = forwardRef<HTMLButtonElement, BotaoProps>(
  ({ className, variante = 'primario', tamanho = 'padrao', ...props }, ref) => {
    const base = cn(
      'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
      tamanho === 'grande' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base',
      variante === 'primario' &&
        'bg-verde-claro text-white hover:bg-verde-escuro focus:ring-verde-claro shadow-lg hover:shadow-xl hover:-translate-y-0.5',
      variante === 'secundario' &&
        'bg-azul-escuro text-white hover:bg-azul-escuro/90 focus:ring-azul-escuro shadow-lg hover:shadow-xl hover:-translate-y-0.5',
      variante === 'outline' &&
        'border-2 border-verde-claro text-verde-claro hover:bg-verde-claro hover:text-white focus:ring-verde-claro',
      className
    );

    return <button ref={ref} className={base} {...props} />;
  }
);

Botao.displayName = 'Botao';

export default Botao;
