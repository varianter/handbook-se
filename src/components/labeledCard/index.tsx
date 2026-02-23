import { ReactNode } from 'react';
import style from './labeledCard.module.css';

type LabeledCardProps = {
  label: string;
  children: ReactNode;
};

export const LabeledCard = ({ label, children }: LabeledCardProps) => {
  return (
    <div className={style.labeledCard}>
      <div className={style.label}>
        <div className={style.labelText}>{label}</div>
      </div>
      <div className={style.content}>
        <div className={style.textContent}>{children}</div>
      </div>
    </div>
  );
};
