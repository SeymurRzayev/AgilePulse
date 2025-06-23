import styles from "../../assets/styles/Trainings.module.css";

interface SearchProps {
  filterIcon: boolean;
  height: number;
  searchValue?: string;
  onSearchChange?: (val: string) => void;
}


const TrainingsSearchContainer = ({ filterIcon, height, onSearchChange, searchValue }: SearchProps) => {
  return (
    <div className={styles.searchWrapper}>
      <div className={`${styles.searchContainer} h-[${height}px]`}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            className="!outline-none !border-0 !shadow-none "
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
          <button className={styles.searchButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {
        filterIcon && (
          <button className={styles.filterButton}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 35.4167L20 14.825M20 7.55671L20 4.58337M20 7.55671C20.9636 7.55671 21.8878 7.9395 22.5692 8.62089C23.2506 9.30227 23.6334 10.2264 23.6334 11.19C23.6334 12.1537 23.2506 13.0778 22.5692 13.7592C21.8878 14.4406 20.9636 14.8234 20 14.8234C19.0364 14.8234 18.1122 14.4406 17.4309 13.7592C16.7495 13.0778 16.3667 12.1537 16.3667 11.19C16.3667 10.2264 16.7495 9.30227 17.4309 8.62089C18.1122 7.9395 19.0364 7.55671 20 7.55671ZM8.98835 35.4167L8.98835 25.8367M8.98835 25.8367C8.02451 25.8367 7.09931 25.453 6.41778 24.7715C5.73624 24.0899 5.35335 23.1655 5.35335 22.2017C5.35335 21.2381 5.73781 20.3139 6.4192 19.6326C7.10058 18.9512 8.02473 18.5684 8.98835 18.5684M8.98835 25.8367C9.95219 25.8367 10.8757 25.453 11.5573 24.7715C12.2388 24.0899 12.6217 23.1655 12.6217 22.2017C12.6217 21.2381 12.2389 20.3139 11.5575 19.6326C10.8761 18.9512 9.95197 18.5684 8.98835 18.5684M8.98835 18.5684L8.98835 4.58337M31.0117 35.4167L31.0117 30.2417M31.0117 22.9734L31.0117 4.58337M31.0117 22.9734C31.9753 22.9734 32.8995 23.3562 33.5808 24.0376C34.2622 24.7189 34.645 25.6431 34.645 26.6067C34.645 27.0838 34.551 27.5563 34.3684 27.9971C34.1859 28.4379 33.9182 28.8385 33.5808 29.1759C33.2435 29.5132 32.8429 29.7809 32.4021 29.9635C31.9613 30.1461 31.4888 30.24 31.0117 30.24C30.5345 30.24 30.0621 30.1461 29.6213 29.9635C29.1805 29.7809 28.7799 29.5132 28.4425 29.1759C28.1051 28.8385 27.8375 28.4379 27.6549 27.9971C27.4723 27.5563 27.3784 27.0838 27.3784 26.6067C27.3784 25.6431 27.7611 24.7189 28.4425 24.0376C29.1239 23.3562 30.0481 22.9734 31.0117 22.9734Z"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )
      }
    </div>
  );
};

export default TrainingsSearchContainer;
