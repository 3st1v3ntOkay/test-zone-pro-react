import style from './row.module.css';
import type { ChildrenProps } from "../../models/global-types";

export const Row = ({children}: ChildrenProps) => {
  return (
    <section className={style.row}>{children}</section>
  )
}