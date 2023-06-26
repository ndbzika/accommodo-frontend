import { Dayjs } from 'dayjs';
import { FuncionarioData } from './FuncionariosData';
import { HospedeData } from './HospedesData';
import { QuartosData } from './QuartosData';

export interface ReservasData {
  id?: number,
  quarto: QuartosData,
  funcionario: FuncionarioData,
  hospede: HospedeData,
  dataInicio: string | Dayjs,
  dataFim: string | Dayjs,
  status: string
}