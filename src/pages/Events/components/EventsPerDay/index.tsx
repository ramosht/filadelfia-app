import React, { useEffect, useState } from 'react';
import ScheduleItem from '../ScheduleItem';
import { View } from 'react-native';
import { TextEmptyPage } from '@components';
import { useLoading } from '@contexts/loading/loading.context';
import { Toast } from 'popup-ui';
import api from '@config/api';
import theme from '@styles/Theme';
import Moment from '../../../../services/moment';

const EventsPerDay = () => {
  const [events, setEvents] = useState({});
  const { setLoading } = useLoading();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('event');
        const sanitizedEvents: any = {};

        data.event.map((item: any) => {
          if (Moment().diff(item.datetime, 'seconds') * -1 > 0) {
            sanitizedEvents[item.datetime] = sanitizedEvents[item.datetime]
              ? [...sanitizedEvents[item.datetime], item]
              : [item];
          }
        });

        setEvents(sanitizedEvents);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Toast.show({
          title: `Ocorreu um erro`,
          text: `Não foi possível obter a agenda`,
          color: theme.colors.danger,
        });
      }
    };

    getSchedule();
  }, [setLoading]);

  return (
    <>
      {Object.keys(events).length > 0 &&
        Object.keys(events).map((key, index) => (
          <View key={key}>
            <TextEmptyPage>
              {Moment(key).format('dddd, DD [de] MMMM')}
            </TextEmptyPage>

            {events[key].map((item: any, index: any) => (
              <ScheduleItem
                key={item.id}
                thumbnail={`${item.thumbnail}`}
                time={Moment.utc(item.datetime).format('HH:mm')}
                title={item.title}
                style={{ marginBottom: 16 }}
                local={item.location}
                eventId={item.id}
                description={item.description}
                dia={Moment(item.datetime).format('DD') || ''}
              />
            ))}
          </View>
        ))}
      {Object.keys(events).length === 0 && (
        <TextEmptyPage>Não há nenhum evento em nossa agenda</TextEmptyPage>
      )}
    </>
  );
};

export default EventsPerDay;
