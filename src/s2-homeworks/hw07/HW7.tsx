import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const arr = [
    {id: 1, value: 'Pre Junior'},
    {id: 2, value: 'Junior'},
    {id: 3, value: 'Junior plus'},
] // value может быть изменено
export type ArrayType = typeof arr;

const HW7 = () => {
    const [value, onChangeOption] = useState(1)
    console.log('HW7 Rendered', value);

    const onOptionChange = (option: { id: number; value: string }) => {
        onChangeOption(option.id);
    };

    return (
        <div id={'hw7'} className={'section'}>
            <div className={s2.hwTitle + " section-header"}>Hometask № 7</div>

            <div className={s2.hw + " section-content"}>
                <div className={s.container}>
                    <div className={s.section}>
                        <SuperSelect
                            id={'hw7-super-select'}
                            options={arr}
                            value={value}
                            onChangeOption={onOptionChange}
                            className={s2.customSelect}
                        />
                    </div>
                    <div className={s.section}>
                        <SuperRadio
                            id={'hw7-super-radio'}
                            name={'hw7-radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onOptionChange}
                            className={s2.customRadio}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW7
