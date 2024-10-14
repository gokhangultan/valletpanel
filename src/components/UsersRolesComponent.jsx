import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/actions/usersActions';

export default function UsersRolesComponent() {
  const dispatch = useDispatch();
  const { users, loading, total, currentPage } = useSelector((state) => state.users);
  const [sort, setSort] = useState('name');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page, sort, filter));
  }, [dispatch, page, sort, filter]);

  const handleSort = (column) => {
    setSort(column);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handlePagination = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1440px] p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div className="flex gap-1 flex-col">
            <h1>Alt Kullanıcılar</h1>
            <h2>Bu sayfada alt kullanıcınıları görüntüleyebilir, rol yetkilerini düzenleyebilirsiniz.</h2>
          </div>
          <div>
            <button className="primaryButton">Kullanıcı Ekle</button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Kullanıcı Ara"
          className="w-full border p-2 rounded-md"
          value={filter}
          onChange={handleFilter}
        />

        <table className="min-w-full bg-white dark:bg-darkCardColor">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Kullanıcı</th>
              <th onClick={() => handleSort('role')}>Rolü</th>
              <th onClick={() => handleSort('phone')}>Telefonu</th>
              <th onClick={() => handleSort('activity')}>Son Aktivite</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
                <td>{user.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div>
            <label>Göster: </label>
            <select
              className="border p-2 rounded-md"
              onChange={(e) => handlePagination(Number(e.target.value))}
              value={page}
            >
              {[...Array(total / 5)].map((_, idx) => (
                <option key={idx} value={idx + 1}>
                  Sayfa {idx + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="pagination">
            {[...Array(Math.ceil(total / 5))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePagination(idx + 1)}
                className={`px-3 py-1 ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : ''}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
