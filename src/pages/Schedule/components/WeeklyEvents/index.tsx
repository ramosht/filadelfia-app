import React, { useEffect, useState } from 'react';
import ScheduleItem from '../ScheduleItem';
import { View } from 'react-native';
import { TextEmptyPage } from '@components';
import { useLoading } from '@contexts/loading/loading.context';
import Toast from 'popup-ui';
import api from '@config/api';
import theme from '@styles/Theme';

const WeeklyEvents = () => {
  const [events, setEvents] = useState({});
  const { setLoading } = useLoading();

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('schedule');

        const sanitizedEvents: any = {};

        data.schedule.map((item: any) => {
          sanitizedEvents[item.weekday] = sanitizedEvents[item.weekday]
            ? [...sanitizedEvents[item.weekday], item]
            : [item];
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

  const translateKey = (key: string) => {
    if (key === 'sunday') return 'Domingo';
    if (key === 'monday') return 'Segunda-feira';
    if (key === 'tuesday') return 'Terça-feira';
    if (key === 'wednesday') return 'Quarta-feira';
    if (key === 'thursday') return 'Quinta-feira';
    if (key === 'friday') return 'Sexta-feira';
    if (key === 'saturday') return 'Sábado';
  };

  const translateKeyAbbreviated = (key: string) => {
    if (key === 'sunday') return 'Dom';
    if (key === 'monday') return 'Seg';
    if (key === 'tuesday') return 'Ter';
    if (key === 'wednesday') return 'Qua';
    if (key === 'thursday') return 'Qui';
    if (key === 'friday') return 'Sex';
    if (key === 'saturday') return 'Sáb';
  };

  return (
    <>
      {Object.keys(events).length > 0 &&
        Object.keys(events).map((key, index) => (
          <View key={index}>
            <TextEmptyPage>{translateKey(key)}</TextEmptyPage>

            {events[key].map((item: any, index: any) => (
              <ScheduleItem
                key={item.id}
                thumbnail={`${item.thumbnail}`}
                time={item.time}
                title={item.title}
                style={{ marginBottom: 16 }}
                local={item.location}
                eventId={item.id}
                description={item.description}
                dia={translateKeyAbbreviated(item.weekday) || ''}
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

export default WeeklyEvents;
