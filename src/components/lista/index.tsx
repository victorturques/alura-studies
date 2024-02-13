import { ITarefa } from '../../types/tarefa';
import item from './Item';
import style from './lista.module.scss';
import Item from "./Item";

interface Props {
    tarefas : ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
  }

function Lista({tarefas, selecionaTarefa} : Props) {

    return(
        <aside className={style.listaTarefa}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                <Item 
                    selecionaTarefa = {selecionaTarefa}
                    key={item.id}
                    {...item}


                />
                ))}
            
            </ul>
        </aside>
    )
}

export default Lista;