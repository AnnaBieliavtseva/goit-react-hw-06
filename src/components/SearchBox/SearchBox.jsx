import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/actions';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactForm.filters.name);

  const onFilter = filter => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        className={css.searchBoxInput}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
