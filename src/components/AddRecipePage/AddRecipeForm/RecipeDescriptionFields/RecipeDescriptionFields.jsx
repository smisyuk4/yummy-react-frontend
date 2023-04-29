import { Formik } from 'formik';
import {
  DescrForm,
  DropdownContainer,
  InputFile,
  InputForm,
  InputSelct,
  InputWrapper,
  LabelFile,
  LabelForm,
  LabelSelect,
  OptionsUl,
  OverlayPicture,
  OverlaySelectIcon,
  RecipeImg,
  SelectIcon,
  SelectItem,
  Test,
  ThumbImege,
} from './RecipeDescriptionFields.styled';
import { useEffect, useState } from 'react';
import { fetchAllCategory } from 'components/CategoriesPage/FetchWithCategory';
import { Icon } from 'components/Icon';
import { v4 as uuidv4 } from 'uuid';

export const RecipeDescriptionFields = ({
  onChange,
  selectCategory,
  selectTime,
}) => {
  const [picture, setPicture] = useState(null);
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');

  const [pictureUrl, setPictureUrl] = useState('');
  const [categoriList, setCategoriList] = useState([]);
  const [categoriHelpListState, setCategoriHelpListState] = useState(false);
  const [timeHelpListState, setTimeHelpListState] = useState(false);
  useEffect(() => {
    fetchAllCategory()
      .then(({ data }) => setCategoriList(data.data.resultCategory))
      .catch(error => error);
  }, []);

  useEffect(() => {
    selectCategory(category);
  }, [category, selectCategory]);
  useEffect(() => {
    selectTime(time);
  }, [time, selectTime]);

  useEffect(() => {
    if (picture) {
      const photoUrl = URL.createObjectURL(picture);
      setPictureUrl(photoUrl);
    }
  }, [picture]);

  const handleSubmit = async ({ title, about, categori }, { resetForm }) => {
    resetForm();
  };

  const handleOnChange = event => {
    const name = event.target.name;
    const target = event.target;
    onChange(target);
    if (name === 'picture') {
      setPicture(event.target.files[0]);
    }
  };
  const categoriName = categoriList.map(categ => {
    return (
      <SelectItem key={uuidv4()}>
        <option key={categ} value={categ}>
          {categ}
        </option>
      </SelectItem>
    );
  });

  const timeList = [];
  for (let i = 5; i <= 120; i += 5) {
    timeList.push(i);
  }
  const timeSelect = timeList.map(categ => {
    return (
      <SelectItem key={uuidv4()}>
        <option key={categ} value={categ}>
          {categ} min
        </option>
      </SelectItem>
    );
  });

  const openCategori = e => {
    if (!categoriHelpListState) {
      setCategoriHelpListState(true);
      return;
    }
    setCategoriHelpListState(false);
  };

  const openTime = e => {
    if (!timeHelpListState) {
      setTimeHelpListState(true);
      return;
    }
    setTimeHelpListState(false);
  };

  const clickDropCategori = ev => {
    setCategory(ev.target.innerHTML);
  };
  const clickDropTime = ev => {
    setTime(ev.target.innerHTML);
  };

  return (
    <Formik
      initialValues={{
        title: '',
        about: '',
        categori: '',
      }}
      onSubmit={handleSubmit}
    >
      <DescrForm autoComplete="off" onChange={handleOnChange}>
        <OverlayPicture>
          <LabelFile>
            <InputFile name="picture" type="file" multiple={false} />
            <ThumbImege>
              {pictureUrl ? (
                <RecipeImg src={pictureUrl} alt="PICTURE" />
              ) : (
                <Icon
                  id="icon-add-photo-recipe"
                  fill="#fafafa"
                  width={64}
                  height={64}
                />
              )}
            </ThumbImege>
          </LabelFile>
        </OverlayPicture>

        <InputWrapper>
          <LabelForm>
            <InputForm
              name="title"
              type="text"
              placeholder="Enter item title"
            />
          </LabelForm>
          <LabelForm>
            <InputForm
              name="about"
              type="text"
              placeholder="Enter about recipe"
            />
          </LabelForm>
          <LabelSelect>
            Categori
            <Test>
              <InputSelct
                readOnly
                type="text"
                placeholder="Select category"
                name="categori"
                onClick={openCategori}
                value={category}
              ></InputSelct>
              <OverlaySelectIcon>
                <SelectIcon
                  id="icon-arrow-down"
                  width={20}
                  height={20}
                ></SelectIcon>
              </OverlaySelectIcon>
              {categoriHelpListState && (
                <DropdownContainer onClick={clickDropCategori}>
                  <OptionsUl>{categoriName}</OptionsUl>
                </DropdownContainer>
              )}
            </Test>
          </LabelSelect>
          <LabelSelect>
            Cooking time
            <Test>
              <InputSelct
                readOnly
                type="text"
                placeholder="Select time"
                name="time"
                onClick={openTime}
                value={time}
              ></InputSelct>
              <OverlaySelectIcon>
                <SelectIcon
                  id="icon-arrow-down"
                  width={20}
                  height={20}
                ></SelectIcon>
              </OverlaySelectIcon>
              {timeHelpListState && (
                <DropdownContainer onClick={clickDropTime}>
                  <OptionsUl>{timeSelect}</OptionsUl>
                </DropdownContainer>
              )}
            </Test>
          </LabelSelect>
        </InputWrapper>
      </DescrForm>
    </Formik>
  );
};
