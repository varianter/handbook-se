import { BlobBackgroundText } from './blobBackgroundText';
import style from './values.module.css';
export const Values = () => {
  return (
    <div className={style.values}>
      <BlobBackgroundText
        headingText={'Transparens'}
        text={
          'Vad i hela friden har  företag att vinna på att hålla information hemlig för sina anställda?'
        }
        blobNr={1}
      />
      <BlobBackgroundText
        headingText={'Glädje att lära'}
        text={
          'Vi vill lära och undervisa. Vi måste ha tillräckligt med ödmjukhet för att inse att vi kan lära oss något av alla, och tron på att alla kan lära oss något.'
        }
        blobNr={2}
      />
      <BlobBackgroundText
        headingText={'Generositet'}
        text={
          'Det visar sig i hur vi möter varandra, våra kunder och människor i vår närhet.'
        }
        blobNr={3}
      />
    </div>
  );
};
