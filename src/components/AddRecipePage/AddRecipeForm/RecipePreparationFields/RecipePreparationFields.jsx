import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  EmptyFieldNotation,
  PreparationFieldSet,
  PreparationHeading,
  PreparationTextArea,
} from './RecipePreparationFields.styled';
import { Formik } from 'formik';

export const RecipePreparationFields = props => {
  // форму створив до того як читав ТЗ, треба думати, виправляти
  const [preparationUneditedText, setPreparationUneditedText] = useState('');
  const [preparationEditedText, setPreparationEditedText] = useState([]);
  const [FieldEmptyState, setFieldEmptyState] = useState(true);

  const onTextAreaChange = e => {
    if (e.currentTarget.value !== '') {
      setFieldEmptyState(false);
    } else {
      setFieldEmptyState(true);
    }
    setPreparationUneditedText([e.currentTarget.value]);
    const result = e.currentTarget.value.split(/\r?\n/);
    setPreparationEditedText(result);
  };
  useEffect(() => {
    props.onChange(preparationEditedText);
  }, [preparationEditedText, props]);

  return (
    <Formik>
      <PreparationFieldSet>
        <PreparationHeading>
          Recipe preparation
          {FieldEmptyState && <EmptyFieldNotation> *</EmptyFieldNotation>}
        </PreparationHeading>
        <PreparationTextArea
          name="preparation"
          as="textarea"
          placeholder="Enter recipe"
          value={preparationUneditedText}
          onChange={onTextAreaChange}
        ></PreparationTextArea>
      </PreparationFieldSet>
    </Formik>
  );
};

RecipePreparationFields.propType = {
  onChange: PropTypes.func.isRequired,
};
