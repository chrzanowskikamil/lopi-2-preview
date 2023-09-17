import { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import style from './detailedInfoDisplay.module.scss';

interface DetailedInfoDisplayProps {
  description: string;
}

export const DetailedInfoDisplay: FC<DetailedInfoDisplayProps> = ({
  description,
}) => {
  const [detailsCurrentChoice, setDetailsCurrentChoice] =
    useState<string>('Description');

  return (
    <>
      <Row>
        <div className={style.details}>
          <div
            className={`  ${style.description} ${
              detailsCurrentChoice === 'Description' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Description');
            }}
          >
            Opis
          </div>
          <div
            className={`  ${style.addationalInfo} ${
              detailsCurrentChoice === 'Addational info' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Addational info');
            }}
          >
            Dodatkowe informacje
          </div>
          <div
            className={` ${style.opinions} ${
              detailsCurrentChoice === 'Opinions' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Opinions');
            }}
          >
            Opinie
          </div>
        </div>
      </Row>
      <Row>
        <div className={style.infoDisplay}>
          {detailsCurrentChoice === 'Description' ? description : ''}
          {detailsCurrentChoice === 'Addational info'
            ? 'Dodatkowe informacje'
            : ''}
          {detailsCurrentChoice === 'Opinions' ? 'Opinie' : ''}
        </div>
      </Row>
    </>
  );
};
