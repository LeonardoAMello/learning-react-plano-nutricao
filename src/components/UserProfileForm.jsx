import { useState } from 'react';
import './UserProfileForm.css';

const UserProfileForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [bodyHeight, setBodyHeight] = useState()
  const [bodyWeight, setBodyWeight] = useState()
  const [workout, setWorkout] = useState()
  const [workoutIntensity, setWorkoutIntensity] = useState()
  const [workoutFrequency, setWorkoutFrequency] = useState()
  const [cardio, setCardio] = useState()
  const [cardioIntensity, setCardioIntensity] = useState()
  const [cardioFrequency, setCardioFrequency] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Fix this. The set function is setting the null value, but the variable itself changes only in the next call
    if(workout !== "true") {
      setWorkoutIntensity();
      setWorkoutFrequency();
    }

    if(cardio !== "true") {
      setCardioIntensity();
      setCardioFrequency();
    }

    let data = {
      "name": name,
      "email": email,
      "age": age,
      "bodyHeight": bodyHeight,
      "workout": workout,
      "bodyWeight": bodyWeight,
      "workoutIntensity": workoutIntensity,
      "workoutFrequency": workoutFrequency,
      "cardio": cardio,
      "cardioIntensity": cardioIntensity,
      "cardioFrequency": cardioFrequency,
    }

    console.log(data);

    // Uncomment this when all others TODO resolved
    // setName("");
    // setEmail("");
    // setAge("");
    // setBodyHeight("");
    // setBodyWeight("");
    // setWorkout("");
    // setWorkoutIntensity("");
    // setWorkoutFrequency("");
    // setCardio("");
    // setCardioIntensity("");
    // setCardioFrequency("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form_region'>
          <h2>Dados pessoais</h2>
          <div className='form_row'>
            <label>
              <span>Nome</span>
              {/* TODO: using onChange + value with a stateful variable is triggering a warning in the console. Need to fix that */}
              <input type="text" name='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name} />
            </label>
            <label>
              <span>E-mail</span>
              <input type="email" name='name' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
          </div>
          <div className='form_row'>
            <label>
              <span>Idade</span>
              <input type="number" name='name' placeholder='Digite a sua idade' onChange={(e) => setAge(e.target.value)} value={age} />
            </label>
            <label>
              <span>Altura (cm)</span>
              <input type="number" name='name' placeholder='Digite a sua altura' onChange={(e) => setBodyHeight(e.target.value)} value={bodyHeight} />
            </label>
            <label>
              <span>Peso (kg)</span>
              <input type="number" name='name' placeholder='Digite o seu peso' onChange={(e) => setBodyWeight(e.target.value)} value={bodyWeight} />
            </label>
          </div>
        </div>
        <div className='form_region'>
          <h2>Atividades físicas</h2>
          <div className='form_row'>
            <label>
              <span>Você realiza algum tipo de treino ou esporte?</span>
              <select name="workout" defaultValue={"placeholder"} onChange={(e) => setWorkout(e.target.value)} value={workout} >
                <option disabled hidden value="placeholder">Selecione</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </label>
            {workout === "true" &&
              <div className='form_conditional_group'>
                <div className='form_row'>
                  <label>
                    <span>Intensidade do treino ou esporte</span>
                    <select name="workoutIntensity" defaultValue={"placeholder"} onChange={(e) => setWorkoutIntensity(e.target.value)} value={workoutIntensity} >
                      <option disabled hidden value="placeholder">Selecione</option>
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                    </select>
                  </label>
                </div>
                <div className='form_row'>
                  <label>
                    <span>Frequência</span>
                    <select name="workoutFrequency" defaultValue={"placeholder"} onChange={(e) => setWorkoutFrequency(e.target.value)} value={workoutFrequency} >
                      <option disabled hidden value="placeholder">Selecione</option>
                      <option value="1">Eventualmente</option>
                      <option value="2">2-4 vezes por semana</option>
                      <option value="3">5-6 vezes por semana</option>
                      <option value="4">Todos os dias</option>
                    </select>
                  </label>
                </div>
              </div>
            }
          </div>
          <div className='form_row'>
            <label>
              <span>Você realiza algum tipo de cardio?</span>
              <select name="cardio" defaultValue={"placeholder"} onChange={(e) => setCardio(e.target.value)} value={cardio} >
                <option disabled hidden value="placeholder">Selecione</option>
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </label>
            {cardio === "true" &&
              <div className='form_conditional_group'>
                <div className='form_row'>
                  <label>
                    <span>Intensidade do cardio</span>
                    <select name="cardioIntensity" defaultValue={"placeholder"} onChange={(e) => setCardioIntensity(e.target.value)} value={cardioIntensity} >
                      <option disabled hidden value="placeholder">Selecione</option>
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                    </select>
                  </label>
                </div>
                <div className='form_row'>
                  <label>
                    <span>Frequência</span>
                    <select name="cardioFrequency" defaultValue={"placeholder"} onChange={(e) => setCardioFrequency(e.target.value)} value={cardioFrequency} >
                      <option disabled hidden value="placeholder">Selecione</option>
                      <option value="1">Eventualmente</option>
                      <option value="2">2-4 vezes por semana</option>
                      <option value="3">5-6 vezes por semana</option>
                      <option value="4">Todos os dias</option>
                    </select>
                  </label>
                </div>
              </div>}
          </div>
        </div>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default UserProfileForm