import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="h-full w-full bg-white overflow-auto text-stone-700 rounded-l-xl rounded-r-xl lg:rounded-r-none">
      <header className="flex flex-col  py-[60px] sm:py-[100px] justify-center items-center space-y-[20px]">
        <h2 className="text-[42px] sm:text-[56px] xl:text-[72px] mx-[20px] text-center font-bold text-stone-700">
          Welcome to BillBud
        </h2>
        <p className="font-medium text-[14px] sm:text-base text-center mx-[20px]">
          Your Go-To place for managing your Bills.
        </p>
      </header>

      <div className={`${styles.wrapper}`}>
        <div className="flex flex-col px-[40px]  sm:mx-[100px] 2xl:mx-[200px] ">
          <p className="text-center flex flex-col space-y-2 font-medium text-lg">
            <p>
              Managing finances can often be a daunting task, but with BillBud,
              it’s easier than ever. BillBud is designed to simplify your
              financial life, offering a suite of powerful features that help
              you stay organized, informed, and in control.
            </p>
            <p>
              Explore our three main features, each tailored to meet your unique
              financial needs:
            </p>
          </p>

          <menu className="flex flex-col 2xl:flex-row overflow-x-auto space-y-8 2xl:space-y-0 mx-auto mt-[80px] sm:mt-[150px] gap-x-8 justify-between">
            <div className="flex flex-col space-y-4">
              <div className="rounded-3xl bg-slate-100 w-[150px] sm:w-[250px] aspect-square p-4 flex justify-center items-center">
                <i className="fi fi-ss-vault flex justify-center items-center text-[80px] sm:text-[130px] text-neutral-600"></i>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="rounded-3xl bg-slate-100 w-[150px] sm:w-[250px] aspect-square p-4 flex justify-center items-center">
                <i className="fi fi-ss-calculator-bill flex justify-center items-center text-[80px] sm:text-[130px] text-neutral-600"></i>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="rounded-3xl bg-slate-100 w-[150px] sm:w-[250px] aspect-square p-4 flex justify-center items-center">
                <i className="fi fi-ss-hexagon-divide flex justify-center items-center  text-[80px] sm:text-[130px] text-neutral-600"></i>
              </div>
            </div>
          </menu>

          <div className="flex relative flex-col pb-[30px] sm:pb-[50px] mt-[150px] sm:mt-[250px] rounded-3xl bg-slate-100">
            <div className={`${styles.descIcon}`}>
              <i className=" fi fi-ss-vault flex justify-center items-center text-neutral-600"></i>
            </div>
            <div className={`${styles.descTitle}`}>Vault</div>
            <div className={`${styles.desc}`}>
              <p>
                Never lose track of an important document again with Vault. This
                feature allows you to securely store and organize all your bills
                and receipts in one convenient place. Whether it’s for personal
                records or warranty claims, Vault has you covered
              </p>

              <p className="flex mt-[30px]">
                <span className="font-semibold sm:mr-3   sm:min-w-[250px] xl:min-w-[300px]">
                  Bill Storage
                </span>
                <p>Save bills with details such as date, name, and amount.</p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold sm:mr-3   sm:min-w-[250px] xl:min-w-[300px]">
                  Warranty Management
                </span>
                <p>Add warranty information and track expiration dates.</p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold sm:mr-3   sm:min-w-[250px] xl:min-w-[300px]">
                  Image Uploads
                </span>
                <p>Attach up to four images per bill for easy reference.</p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold mr-3  min-w-[200px] sm:min-w-[250px] xl:min-w-[300px]">
                  Access Anytime
                </span>
                <p>Retrieve and download your bills whenever you need them.</p>
              </p>

              <p className="mt-[30px]">
                Vault ensures your important documents are always at your
                fingertips, organized, and easily accessible.
              </p>
            </div>
          </div>

          <div className="flex relative flex-col pb-[30px] sm:pb-[50px] mt-[100px] rounded-3xl bg-slate-100">
            <div className={`${styles.descIcon}`}>
              <i className=" fi fi-ss-calculator-bill flex justify-center items-center text-[130px] text-neutral-600"></i>
            </div>
            <div className={`${styles.descTitle}`}>BillTrack</div>
            <div className={`${styles.desc}`}>
              <p>
                Stay on top of your finances with BillTrack, our comprehensive
                expense tracking tool. Understand where your money goes, make
                informed decisions, and take control of your spending. BillTrack
                offers a variety of features designed to give you a clear
                picture of your financial health
              </p>
              <p className="flex mt-[30px]">
                <span className="font-semibold sm:mr-3  sm:min-w-[250px] xl:min-w-[300px]">
                  Financial Summary
                </span>
                <p>Get an overview of your income, expenses, and savings.</p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold sm:mr-3   sm:min-w-[250px] xl:min-w-[300px]">
                  Recent Transactions
                </span>
                <p>Keep track of your latest expenses and incomes.</p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold sm:mr-3 sm:min-w-[250px] xl:min-w-[300px]">
                  Expense Categories
                </span>
                <p>
                  Categorize your spending to see where your money is going.
                </p>
              </p>
              <p className="flex mt-4">
                <span className="font-semibold sm:mr-3   sm:min-w-[250px] xl:min-w-[300px]">
                  Statistical Comparisons
                </span>
                <p>
                  Compare your current spending with previous months to identify
                  trends and make adjustments.
                </p>
              </p>

              <p className="mt-[30px]">
                BillTrack helps you budget effectively, save more, and achieve
                your financial goals.
              </p>
            </div>
          </div>

          <div className="flex relative flex-col pb-[30px] sm:pb-[50px] mt-[100px] rounded-3xl bg-slate-100">
            <div className={`${styles.descIcon}`}>
              <i className=" fi fi-ss-hexagon-divide flex justify-center items-center text-[130px] text-neutral-600"></i>
            </div>
            <div className={`${styles.descTitle}`}>BillSplit</div>
            <div className={`${styles.desc}`}>
              <p>
                Splitting expenses has never been this simple. BillSplit is the
                perfect tool for sharing costs with friends, family, or
                roommates.Whether it's splitting the rent, utilities, or a group
                dinner, BillSplit ensures everyone pays their fair share without
                any hassle. Say goodbye to awkward money conversations and hello
                to seamless cost-sharing.
              </p>
              <p className="flex mt-[30px]">
                <span className="font-medium mr-3 ">
                  Effortlessly divide multiple bills among multiple people
                </span>
              </p>
              <p className="flex mt-2">
                <span className="font-medium mr-3 ">
                  Divide Equally, Manually and By Ratio for Quick and Easy bill
                  division
                </span>
              </p>
              <p className="flex mt-2">
                <span className="font-medium mr-3 ">
                  Get optimized settlements in seconds
                </span>
              </p>
              <p className="flex mt-2">
                <span className="font-medium mr-3 ">
                  Save the Summary for record or view later
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center mx-[30px] sm:mx-[50px] lg:mx-[150px] mt-[100px] flex flex-col space-y-6 font-medium text-lg">
          <p>
            At BillBud, we believe in empowering you to manage your finances
            with confidence and ease. Join our community today and experience
            the simplicity of streamlined financial management.
          </p>
          <p className="">
            BillBud – where your financial peace of mind begins.
          </p>
        </p>
      </div>

      <Footer />
    </div>
  );
}
