import { Metadata } from 'next';
import { Home } from '@/components/Home';

export const metadata: Metadata = {
  title: 'WillCode',
  description: 'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills. Conheça como suas habilidades técnicas e competências interpessoais podem contribuir para o seu sucesso.',
};

export default function Page() {
  return <Home />
}