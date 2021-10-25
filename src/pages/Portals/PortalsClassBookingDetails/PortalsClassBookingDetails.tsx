import React from 'react';
import { IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ClassBookingDetails from '../../../components/ClassBookingDetails';
import useClassDetails from '../../../hooks/useClassDetails';

type Props = RouteComponentProps<{ id: string }>;

const PortalsClassBookingDetails: React.FC<Props> = ({ match }) => {
  const { classDetails, loading, onBookClassClick } = useClassDetails(match.params.id);

  return (
    <IonPage>
      <ClassBookingDetails variant="portals" classDetails={classDetails} loading={loading} onBookClassClick={onBookClassClick} />
    </IonPage>
  );
};

export default PortalsClassBookingDetails;