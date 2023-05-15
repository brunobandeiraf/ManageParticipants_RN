import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participant } from '../../components/Participant';

export default function Home() {
    
    const participants = ['Ana Maria','Breno Alves', 'Carlos Faria', 
    'Daniela Mota', 'Efraim Gomes', 'Francisco Caturio', 'Guitierre Matheus',
    'Heitor Miorato', 'Irajar Abreu', 'Jesus João', 'Larisa Manoela', 'Marian Mendes' ];

    function handleParticipantAdd(){
        
        return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
    }
    
    function handleParticipantRemove(name: string){
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.eventName}> 
            Nome do Evento 
        </Text>
        <Text style={styles.eventDate}> 
            Sexta, 13 de Maio de 2023 
        </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> +  </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
    )
  }
  