import style from './blobBackgroundText.module.css';

type BlobBackgroundTextProps = {
  headingText: string;
  text: string;
  blobNr: number;
};

export const BlobBackgroundText = ({
  headingText,
  text,
  blobNr,
}: BlobBackgroundTextProps) => {
  const variantClass = 
    blobNr === 1 ? style.variant1 :
    blobNr === 2 ? style.variant2 :
    style.variant3;

  return (
    <div className={`${style.blobBackgroundText} ${variantClass}`}>
      <h4>{headingText}</h4>
      <p>{text}</p>
      {blobNr === 1 && (
        <img
          src="./assets/faceShock.svg"
          alt="shocked face"
          className={style.emoji}
        />
      )}
      {blobNr === 3 && (
        <img
          src="./assets/faceSmile.svg"
          alt="smiling face"
          className={style.emoji}
        />
      )}
    </div>
  );
};
