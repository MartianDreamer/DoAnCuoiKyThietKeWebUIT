const header = `    <div class="nav mb-4">
<!-- <div class="col-sm-3"></div> -->
<div class="col-sm-12">
  <!-- Nav tabs -->
  <!-- <ul class="nav nav-tabs"> -->
  <nav class="navbar navbar-expand navbar navbar-light d-flex justify-content-between" style="border: beige solid 8px">
    <div class="page-list navbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="../index.html"
              >Trang Chủ</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../thongTinGV.html">Đội Ngũ Giáo Viên</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Các Khóa Học
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="../cacKhoaHoc/thieuNhi.html">Tiếng Anh Thiếu Nhi</a>
              <a class="dropdown-item" href="#">Tiếng Anh Thiếu Niên</a>
              <a class="dropdown-item" href="#">Tiếng Anh Giao Tiếp</a>
              <a class="dropdown-item" href="#">Luyện Cấp Tốc IELTS</a>
              <a class="dropdown-item" href="#">Tiếng Anh Phổ Thông</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" target="_blank" href="../cacKhoaHoc/khoaHocSapKhaiGiang.html"
                >KHÓA SẮP KHAI GIẢNG</a
              >
            </div>
          </li>
          <!-- <li class="nav-item">
              <a class="nav-link" href="#">Thành Tích HV Đạt Được</a>
            </li> -->
          <li class="nav-item">
            <a class="nav-link" href="../lopHocThucTe.html">Lớp Học Thực Tế</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../shop.html">Mua Sách</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="../lienHe.html"
              >Liên hệ</a
            >
          </li>
        </ul>
    </div>
    <!-- Navbar content -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">USUK English Center</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0" style="margin-left: 50px">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div class="socialmedia">
          <span style="float: right">
            <a
              target="_blank"
              href="https://www.facebook.com/usukcenterlongthanh"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              target="_blank"
              href="https://youtube.com/shorts/Bjj3RxyRH24?feature=share"
              ><i class="fab fa-youtube-square"></i
            ></a>
            <a href="mailto:usukenglishcenter@gmail.com"
              ><i class="fas fa-at"></i
            ></a>
          </span>
        </div>
      </div>
    </nav>
  </nav>
</div>
<!-- <div class="col-sm-3"></div> -->
</div>`;

const $body = document.querySelector("body");
$body.insertAdjacentHTML("afterbegin", header);
const url = window.location.href;
const fileName = url.substring(url.lastIndexOf("/") + 1);
let active = document.querySelector(`a[href="../${fileName}"]`);
if (active == null) {
  active = document.querySelector(`a#navbarDropdown`);
}
active.className += " active";
