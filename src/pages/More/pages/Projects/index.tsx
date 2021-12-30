// import { Loading } from '@components/atoms';
import ProjectThumb from './components/ProjectThumb';
import { Text } from '@components';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Popup } from 'popup-ui';
import api from '@config/api';
import DefaultTemplate from '@templates/DefaultTemplate';
import { useLoading } from '@contexts/loading/loading.context';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Array<any>>([]);
  const { setLoading } = useLoading();
  const navigation = useNavigation();

  useEffect(() => {
    const getAboutUsText = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('project');
        setProjects(data.projects);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Popup.show({
          type: 'Danger',
          title: 'Ocorreu um erro',
          button: true,
          textBody:
            'Não foi possível obter projetos. Aguarde alguns instantes ou entre em contato com a secretaria.',
          buttonText: 'Tudo bem',
          callback: () => {
            Popup.hide();
            navigation.goBack();
          },
        });
      }
    };

    getAboutUsText();
  }, []);

  return (
    <DefaultTemplate description="Nossos projetos" pageName="Projetos">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {projects &&
          projects.map((project: any) => (
            <ProjectThumb key={project.id} project={project} />
          ))}
      </ScrollView>
    </DefaultTemplate>
  );
};

export default Projects;
