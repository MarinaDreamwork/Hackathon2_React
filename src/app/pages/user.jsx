import React, { useState } from 'react';
import UserCard from '../components/common/form/userCard';
import Progress from '../components/common/progress';

const User = () => {
  const [test, setTest] = useState([
    {
      bgColor: '#00695c',
      completed: 57,
      type: 'bar',
      id: new Date().getMilliseconds() * Math.random(),
      label: 'HTML'
    }
  ]);
  
  const changeSelect = ({ target }) => {
    setTest([
      {
        ...test[0],
        type: target.value
      }
    ]);
  };

  return (
    <>
  <h2 className="text-center">Страница пользователя</h2>

    < div className='contCard' >
  <UserCard>
  <h5>БиоДанные</h5>
    <div className='imgCont'>
      <img src="https://bugaga.ru/uploads/posts/2016-02/1456422928_simmetrichnye-lica-20.jpg" alt="" />
    </div>
    <div>
    <h5>Никита Нечитайлов</h5>
    <h5>Возраст - 10 лет</h5>
    </div>
    
  </UserCard>
  <UserCard>
  <h5>О себе</h5>
   <p>Изучаю Frontend разработку, изучаю Английский.  <br/> Закончил второй курс моего первого высшего.  <br/> В свободное время занимаюсь как легкой, так и тяжелой атлетикой.</p>
  
  </UserCard>
  <UserCard>
  <h5>Что выполнял в процессе работы</h5>
  <p>Сделал progress. <br/> Cоздал cтраницу пользователя  <br/> Исправил слайдер  <br/> Cделал Деплой приложения</p>
  </UserCard>
  <UserCard>
  <h5>Как связаться со мной</h5>
  <h3>VK -</h3>
  <h3>Telegram -</h3>
  <h3>Tel -</h3>
  </UserCard>
  </div>
  <div className='progressBlock'>
  {test.map((i) => (
        <Progress
          changeSelect={changeSelect}
          key={i.id}
          bgColor={i.bgColor}
          completed={i.completed}
          label={i.label}
          type={i.type}
        />
      ))}
 
</div>
  
  </>
  );
};

export default User;
